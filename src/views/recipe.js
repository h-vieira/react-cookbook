 
import React, { useState, useEffect } from 'react';
import getData from '../utils/apis';
import { getRecipeByID } from '../utils/constants';
import {  useParams } from 'react-router-dom';

import Navigation from '../components/navbar';
import TopPicks from '../components/topPicks'
import LiItem from '../components/Li'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Recipe = ( ) =>{
    const { id } = useParams()
    const [recipe, setRecipe] = useState([]);
    const description = JSON.stringify(recipe.description);
  
    useEffect(() => {
        const query = getRecipeByID(id);
        getData(query)
        .then(res =>  { 
            const recipe = res.data.recipe;
            setRecipe(recipe);
        }); 
    }, [id]);
     
    return (
        <React.Fragment>
            <Navigation />
            <div className="recipe-view">
                <div className="recipe">
                    <div className="recipe-header">
                        <div className="title">{recipe.title}</div>
                        <div className="time"> 
                          <FontAwesomeIcon icon={faClock} /> {recipe.time} min</div>
                    </div>
                    <div className="recipe-upper-body">
                        <div className="ingredients"> <strong>Ingredients:</strong>
                        <br/><br/>

                            <ul> 
                            { recipe.ingredients.map((ingredients) => ( <LiItem key={`${id}&${ingredients}`} item={ingredients} />))}
                            </ul>
                        </div>
                        {/* <img src={recipe.image.url} alt=""/> */}
                        <div className=" recipe-img card-sm" style={{ backgroundImage: `url(${recipe.image.url})` }}></div>
                    </div>
                    <div className="description"><strong>Preparation method:</strong>
                        <br/><br/> {description}</div>
                </div>
                
            
            {/*  {recipe ? 
                    <div>
                    <div>{recipe.title}</div>
                    <div>By: {recipe.author}</div>
                    </div>

                : '...loading'} */}
                <div className="topPicks-y">
                    <TopPicks />
                </div> 
            </div>
        </React.Fragment>
    )
};

export default Recipe;