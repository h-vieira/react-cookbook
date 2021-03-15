import fetching from '../utils/fetch'
import {getCategories, getCategoryRecipes, getRecipesByID} from '../utils/constants'
import {useState, useEffect, useContext} from 'react'
import { Link, Route, useParams } from 'react-router-dom';

import RenderCategory from '../components/category'
import RenderCard from '../components/card'
import {BlogContext} from '../utils/context'

// CSS
import {Container, Row, Col} from 'react-bootstrap/'


const Categories = ({match}) => {

    
    const {category} = useParams()
    console.log(category)
    console.log(match.params)

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
            .then(data => setRecipes((prev)=> [...prev, data.data.recipeCollection.items[0]]))}

    

    useEffect(()=>{
        recipeId.forEach(id =>
            {getRecipeDetails(id)})
    },[recipeId])


    

    return (
        <Container>
        <Row>
        <Col xs={2}>
        <h3>Categories:</h3>
        <div>
        {categories ? categories.map((category) =>
            <Link to={`/Library/${category.categoryTitle}`} > 
            <div onClick={()=>{getId(category.categoryTitle)}}>

            <RenderCategory category={category}/>

            </div>
            </Link>
            ) : '...loading'}
        </div>
        </Col>
        <Col xs={10} d-flex flex-wrap>
            <h3>Recipes:</h3>
        <div>
        <Route path="/Library">
        <div>
        hi
        </div>
        </Route>

        <Route path= "/Library/:category">
            {recipes.map(recipe => 
                <Link to={`/Recipe/${recipe.title}`}>

                <RenderCard recipe={recipe}/>
                
                </Link>
                )}
        </Route>
        </div>
        </Col>
        </Row>
        </Container>
    )
}

export default Categories