 
import React, { useState, useEffect, useParams } from 'react';
import Navigation from '../components/navbar'
import getData from '../utils/apis';
import { getRecipeByID } from '../utils/constants';
import {  useParams } from 'react-router-dom'

const Recipe = ( ) =>{
    const { id } = useParams()
  /*   const [recipe, setRecipe] = useState(); */

    useEffect(() => {
        const query = getRecipeByID(id);
        getData(query)
        .then(res => console.log(res.data) /* { 
            const recipe = res.data.recipeCollection.items.map(items => {
                
            });
            setTop(recipe);
        } */); 


    }, [id]);

    return (
        <React.Fragment>
            <Navigation />
           {/*  {recipe ? 
                <div>
                <div>{recipe.title}</div>
                <div>By: {recipe.author}</div>
                </div>
            
            
            : '...loading'} */}
             
        </React.Fragment>
    )
};

export default Recipe;