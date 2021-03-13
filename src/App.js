import React from 'react'
/* import React, {useState, useeffect} from 'react'; */

import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//components
import Homepage from "./views/homepage"
import Recipe from "./views/recipe"
import PageNotFound from "./views/404"
import Recipe from "./views/recipe"
import Categories from './views/library'


function App() {
  
  return (
    <React.Fragment>
        <Switch>
          
          <Route exact path="/" render={ ()=> <Homepage /> } />
          <Route exact path="/recipe/:id" render={ (props)=> <Recipe {...props} /> } />

          {/* <Route path="/recipe/:id" component={Recipe} /> */}
          
          <Route path= "/library" component={Categories}/>
          <Route path="*" component={PageNotFound} />

        </Switch>

    </React.Fragment>
  );
}

export default App;
