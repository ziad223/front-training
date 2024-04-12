import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import './dummyProducts.css';
import { Link } from 'react-router-dom';

const DummyProducts = ({addToCart}) => {
  let [products , setProducts] = useState([]);

  useEffect(() =>{
   fetch("https://dummyjson.com/products")
   .then(res => res.json())
   .then(data => {
    setProducts(data.products)
   })

  } , [])
  return (
    <div className='dummyy'>
      <div className="title">
      <h1>DummyProducts</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis dolorum unde quas, molestiae omnis quasi, suscipit tempora velit enim sit officiis corrupti, itaque architecto natus aperiam non veniam sequi.
      </p>
      <div className="products container">
       {products.map(product =>{
        return(
          <div className='product' key={product.id}>
          <Link to={`/dummySingle/${product.id}`}>
          <img src={product.thumbnail} alt="" />
          </Link>
          <h2>{product.title.toString().slice(0 , 15)}</h2>
          <div>
            <h4>${product.price}</h4>
          <FaPlus className='plus-icon'  onClick={() =>addToCart(product)} />
          </div>
          </div>
        )
       })}
      </div>
      </div>
    </div>
  )
}

export default DummyProducts
