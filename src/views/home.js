import React from 'react'

//components
import Header from '../components/header';
import Navbar from '../components/navbar';
import Categories from '../components/category'

const Homepage = () => {
    return (
        <React.Fragment>
        homepage
            <Header />
            <Navbar />
            
            <Categories />
        </React.Fragment>
    );
}; 

export default Homepage;