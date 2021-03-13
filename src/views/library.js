import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Route } from 'react-router';

const RecipeList = () => {

    return (
        <React.Fragment>
            <Navigation />
            <Category />
            <div className="categoriesContent">
                
            </div>
            <TopPicks />
        </React.Fragment>
    )
}
export default RecipeList; 