import React from 'react'
/* import React, {useState, useeffect} from 'react'; */

import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//components
import Homepage from "./views/home"
import PageNotFound from "./views/404"


function App() {
  
  return (
    <React.Fragment>
        <Switch>
          
          <Route 
            exact 
            path="/" 
            render={()=> <Homepage /> }
          />
         
          
          {/* <Route path="/recipe/:id" component={recipe} />
 */}
          <Route path="*" component={PageNotFound} />

        </Switch>

    </React.Fragment>
  );
}

export default App;
