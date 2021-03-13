import React from 'react';
import {Link} from 'react-router-dom'
const RenderSmallCard = ({top: {title, chef, stars, img, id}}) =>{
   
    return (
        <React.Fragment>
            <Link to={`/recipe/${id}`}>
                <div className="card-sm" style={{ backgroundImage: `url(${img})` }}>
                    <div className="title"> {title} </div>
                    <div className="chef"> Chef:  <span> {chef} </span> </div>
                    <div className="rating"> {stars} Stars </div>
                </div>
            </Link>
        </React.Fragment>
    )
};

export default RenderSmallCard;