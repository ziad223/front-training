import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import {useParams} from 'react-router-dom';
const FakeSingle = ({addToCart}) => {
    const {id} = useParams()
    let [product , setProduct] = useState([]);

  useEffect(() =>{
   fetch(`https://fakestoreapi.com/products/${id}`)
   .then(res => res.json())
   .then(data => {
    setProduct(data)
   })

  } , [])
  return (
    <div className='product-single container'>
      <img src={product.image} alt="" />
      <div className="productSingle-details">
        <h2>{product.category}</h2>
        <h3>{product.title}</h3>
        <div>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
        </div>
        <p>{product.description}</p>
        <h2>Price : ${product.price}</h2>
        <button  onClick={() =>addToCart(product)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default FakeSingle
