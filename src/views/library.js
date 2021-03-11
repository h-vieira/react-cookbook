import fetching from '../utils/fetch'
import {getCategories, getCategoryRecipes, getRecipesByID} from '../utils/constants'
import {useState, useEffect} from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import RenderCategory from '../components/category'
import RenderCard from '../components/card'


const Categories = () => {

    const [categories, setCategories] = useState()
    const [recipeId, setRecipeID] = useState([])
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        // gets all categories as IDs
        fetching(getCategories)
        .then(res => setCategories(res.data.categoryCollection.items))
    }, [])

    // gets all recipes in a category as IDs
    const getId = (categoryTitle) => {
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
        <div>
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
            <h3>Recipes:</h3>
        <div>
        <Route path= "/Library/:category">
            {recipes.map(recipe => 
                <Link to={`/Recipe/${recipe.title}`}>

                <RenderCard recipe={recipe}/>
                
                </Link>
                )}
        </Route>
        </div>
        </div>
    )
}

export default Categories