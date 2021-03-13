import React from 'react';
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
                <TopPicks />

            </div>
        </React.Fragment>
    );
}; 

export default Homepage;