import React from 'react'
import {Link} from 'react-router-dom';

// CSS
import {Button} from 'react-bootstrap/'

//components
import Header from '../components/header';
import Navbar from '../components/navbar';


const Homepage = () => {
    return (
        <React.Fragment>
        homepage
            <Header />
            <Navbar />
            <Link to= "./Library">
            <Button>Categories</Button>
            </Link>
            
        </React.Fragment>
    );
}; 

export default Homepage;