import fetching from '../utils/fetch'
import {getCategories, getCategoryRecipes, getRecipesByID} from '../utils/constants'
import {useState, useEffect} from 'react'


const Categories = () => {

    const [categories, setCategories] = useState()
    const [recipeId, setRecipeID] = useState([])
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetching(getCategories)
        .then(res => setCategories(res.data.categoryCollection.items))
    }, [])

    const getId = (categoryTitle) => {
        
        const query = getCategoryRecipes(categoryTitle)
        
        fetching(query)
        .then(res => {
            const obj = res.data.categoryCollection.items[0].categoryRecipesCollection.items
            setRecipeID(obj)
            
        })
        .then(() =>
            recipeId.map(obj => 
            {console.log(getRecipesByID(obj.sys.id))
            fetch(getRecipesByID(obj.sys.id))
            .then(res => res.json())
            .then(data => setRecipes((prev)=> [...prev, data]))
            }
            
            )
            // fetch(getRecipesByID(obj.sys.id)))
            // .then(res => console.log(res))

        )
        
    }
    

    return (
        <div>
        {categories ? categories.map((categorie) =>
            <div onClick={()=>getId(categorie.categoryTitle)}>
            {categorie.categoryTitle}
            </div>            
            ) : '...loading'}
        </div>
    )
}

export default Categories