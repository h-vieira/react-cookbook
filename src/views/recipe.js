import React from 'react'
import fetching from '../utils/fetch'
import {getRecipeByTitle} from '../utils/constants'
import {useState, useEffect, useParams} from 'react'


const Recipe = ({match}) =>{

    const [recipeDetails, setrecipeDetails] = useState()

    

    useEffect(()=> {
        const query = getRecipeByTitle(match.params.id)
        console.log(query)
        console.log(id)
        fetching(query)
        .then(res => 
            {console.log(res)
            setrecipeDetails(res.data.recipeCollection.items[0])}
            )
    },[])


    return (
        <React.Fragment>
            {recipeDetails ? 
                <div>
                <div>{recipeDetails.title}</div>
                <div>By: {recipeDetails.author}</div>
                </div>
            
            
            : '...loading'}
        </React.Fragment>
    )
};

export default Recipe;