import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholder from '../assets/placeholder.jpg'
import { Link } from 'react-router-dom';
import { useSubscription } from '@apollo/client';
import { GET_SINGLE_PRODUCT } from '../subscriptions';
// import { GET_SINGLE_PRODUCT } from '../mutations';

export default function ProductCard() {


    const { loading, error, data } = useSubscription(GET_SINGLE_PRODUCT);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);

    return (
        <div className="productCard">
            <div className="container newsletter__container">
                <h1 className="mr-auto">Product List</h1>
                <div className="cardContainer">
                    {data.product.map(product => (
                        <Card key={product.id} className='card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>{product.product_name}</Card.Title>
                                <Card.Text>
                                    {product.additional_information}
                                </Card.Text>
                                <Button className='cardBtn' variant="primary">Detail</Button>
                            </Card.Body>
                        </Card>
                    ))

                    }


                </div>
                <Link className='btn btn-primary text-end mt-4' to="/storeManagement">View More</Link>
            </div>
        </div>
    )
}
