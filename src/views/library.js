import React from 'react';

import fetching from '../utils/fetch'
import {getCategories, getCategoryRecipes, getRecipesByID, getAllRecipes} from '../utils/constants'
import { useState, useEffect, useContext } from 'react'
import { Link, Route, useParams } from 'react-router-dom';

import Navigation from '../components/navbar';
import TopPicks from '../components/topPicks';
import RenderCategory from '../components/category'
import RenderCard from '../components/card'
import RenderSmallCard from '../components/smallCard';
import { BlogContext } from '../utils/context'

// CSS
import { Container, Row, Col } from 'react-bootstrap/'
 


const Categories = ({match}) => {

    const {category} = useParams()

    const {recipeCategory, setRecipeCategory} = useContext(BlogContext)

    const [categories, setCategories] = useState()
    const [recipeId, setRecipeID] = useState([])
    const [recipes, setRecipes] = useState([])


    useEffect(()=>{
        // gets all categories as IDs
        fetching(getCategories)
        .then(res => setCategories(res.data.categoryCollection.items))

 
        // loads recipes on returning to the page
 
        if(recipeCategory) {
            getId(recipeCategory)
        }
    }, [])

    // gets all recipes in a category as IDs
    const getId = (categoryTitle) => {
        setRecipeCategory(categoryTitle)
        const query = getCategoryRecipes(categoryTitle)
        fetching(query)
        .then(res => {
            const obj = res.data.categoryCollection.items[0].categoryRecipesCollection.items
            const itemsID = obj.map(obj => { return obj.sys.id })
            setRecipeID(itemsID)})}

    // gets the details of the recipes in the selected category
    const getRecipeDetails = (id) => {
            setRecipes([])
            const query = (getRecipesByID(id))
            fetching(query)
            .then(res => {
                console.log(res.data.recipeCollection.items)
                const libraryCards = res.data.recipeCollection.items.map(items => {
                    return {
                        img : items.image.url,
                        title: items.title,
                        chef: items.author,
                        stars: items.rating,
                        id: items.sys.id                    
                    }
                })
                setRecipes((prev) => [...prev, libraryCards[0]])
                
                //setRecipes((prev)=> [...prev, data.data.recipeCollection.items[0]])
            
                })}


    const loadAllRecipes = () => {
        fetching(getAllRecipes())
        .then(res => {
            const allRecipes = res.data.recipeCollection.items.map(items => {
                return {
                    img : items.image.url,
                    title: items.title,
                    chef: items.author,
                    stars: items.rating,
                    id: items.sys.id                    
                }
        })
        setRecipes(allRecipes)
    })}

    useEffect(()=>{
        loadAllRecipes()
    },[!recipes]
    )
    

    useEffect(()=>{
        recipeId.forEach(id =>
            {getRecipeDetails(id)})
    },[recipeId])


    return (

        <React.Fragment>
            <Navigation />
            <Container>


                <Row>
                    <Col xs={2}>
                        <h3>Categories:</h3>
                        <div>
                            {categories ? categories.map((category) =>
                                <Link to={`/Library/${category.categoryTitle}`} style={{ textDecoration: 'none' }}> 
                                    <div onClick={()=>{getId(category.categoryTitle)}}>
                                        <RenderCategory category={category}/>
                                    </div>
                                </Link>
                            ) : '...loading'}
                        </div>
                    </Col>
                    <Col xs={10} d-flex flex-wrap>
                        <h3>Recipes:</h3>
                        
                        
                        <Route path= "/Library/:category">
                        <div className="d-flex flex-wrap">
                            {recipes.map(recipe => 

                                <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                                <div className="m-3">
                                <RenderSmallCard key={recipe.id} top={recipe} />
                                </div>
                                </Link>
                                )}
                        </div>
                        </Route>
                         
                    </Col>
                </Row>
            </Container>
            <TopPicks />
        </React.Fragment>
    )
}

export default Categories