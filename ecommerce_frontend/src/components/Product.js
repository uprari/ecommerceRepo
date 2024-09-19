import React from 'react'
import { Card, CardBody } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  {console.log(product)}
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image}/>
      </Link>
      <CardBody>
      <Link to={`/product/${product._id}`}>
      <Card.Title as="div">
        <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div" ><div className="my-3">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e25'}/>
      </div>
      </Card.Text>
      <Card.Text>
        <h3>${product.price}</h3>
      </Card.Text>
      </CardBody>
    </Card>
  )
}

export default Product
