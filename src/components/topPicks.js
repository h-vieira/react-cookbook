import React, { useState , useEffect } from 'react';
import RenderSmallCard from './smallCard';
import getData from '../utils/apis';
import getMostViewed from '../utils/constants';

const RenderTopPicks = () =>{
    const [top, setTop] = useState([]);

    useEffect(() => {
        const query = getMostViewed(5);
        getData(query)
        .then(res => { 
            const trending = res.data.recipeCollection.items.map(items => {
                return {
                    img : items.image.url,
                    title: items.title,
                    chef: items.author,
                    stars: items.rating,
                    id: items.sys.id                    
                }
            });
            setTop(trending);
        }); 

    }, []);

    return (
        <React.Fragment>
        <div className="topPicks-x">
            { top.map((items) => ( <RenderSmallCard key={items.id} top={items} />))}
        </div>
        </React.Fragment>
    )
};

export default RenderTopPicks;