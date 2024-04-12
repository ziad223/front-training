import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import './fakeProducts.css';
import { Link } from 'react-router-dom';

const FakeProducts = ({addToCart}) => {
 let [products , setProducts] = useState([]);

  useEffect(() =>{
   fetch("https://fakestoreapi.com/products")
   .then(res => res.json())
   .then(data => {
    setProducts(data)
   })

  } , [])
  return (
    <div className='fake '>
      <div className="title">
      <h1>FakeProducts</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sit cumque, eius facere temporibus magnam quas quaerat? Ullam eius labore est perspiciatis repudiandae alias, fugit libero possimus pariatur minus atque.
      </p>
      </div>
      <div className="products container">
       {products.map(product =>{
        return(
          <div className='product' key={product.id}>
          <Link to={`/fakeSingle/${product.id}`}>
          <img src={product.image} alt="" />
          </Link>
          <h2>{product.title.toString().slice(0 , 15)}</h2>
          <div>
            <h4>${product.price}</h4>
          <FaPlus className='plus-icon' onClick={() =>addToCart(product)} />
          </div>
          </div>
        )
       })}
      </div>
    </div>
  )
}

export default FakeProducts
