import {Card} from 'react-bootstrap/'


const RenderCategory = ({category}) => {

    return (

        <Card className= "mb-2 text-center cathegory">
        <Card.Body>
        <Card.Title>{category.categoryTitle}</Card.Title>
        </Card.Body>  
        </Card>

    )
}

export default RenderCategory