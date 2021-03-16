import React from 'react';
import {Link} from 'react-router-dom';

// CSS
import {Button} from 'react-bootstrap/'

//components
import Header from '../components/header';
import Navigation from '../components/navbar';
import TopPicks from '../components/topPicks';

const Homepage = () => {


    
    return (
        <React.Fragment>
            <Header />
            <Navigation />
            
            <div className="homeContent">
                <div className="topPicks-x">
                    <TopPicks />
                </div>

            </div>

            

        </React.Fragment>
    );
}; 

export default Homepage;