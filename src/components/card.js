import React from 'react'
import {Card} from 'react-bootstrap/'

const RenderCard = ({recipe}) => {
    return (
        <Card style={{width: '18rem'}}>
        <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
            {recipe.time}
        </Card.Text>
        
        </Card.Body>
           
           
        </Card>
        )
}

export default RenderCard