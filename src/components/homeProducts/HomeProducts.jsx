import { useEffect, useState } from 'react';
import Sdata, { headData, labtopData, phoneData } from './Sdata';
import './homeProducts.css';
import { FaPlus } from "react-icons/fa";


const HomeProducts = ({addToCart}) => {
    const Alldata = Sdata.shopItems;
    let [realData , setRealData] = useState(Alldata);
    const [category , setCategory] = useState('all');

 useEffect(() =>{
   if(category == 'all'){
        setRealData(Alldata);
    }else if(category == 'phone'){
        setRealData(phoneData);
    }else if(category == 'head'){
        setRealData(headData)
    }
    else if(category == 'labtop'){
        setRealData(labtopData)
    }

 } , [category])

        
  return (
    <div className='home-products container'>
      <div className="homeProducts-left">
        <h2>Brands | Shops</h2>
            <div onClick={() =>setCategory("all")}>Alldata</div>
            <div onClick={() =>setCategory("phone")}>Phones</div>
            <div onClick={() =>setCategory("labtop")}>Laptobs</div>
            <div onClick={() =>setCategory("head")} >Hand Phone</div>
      </div>
      <div className="homeProducts-right">
      {realData.map(item =>{
        return(
            <div className='home-product'>
                <span>{item.discount}%Off</span>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
             <div>
             <p>${item.price}</p>
             <FaPlus className='plus-icon' onClick={() => addToCart(item)}/>
             </div>
            </div>
        )
     })}
      </div>
    </div>
  )
}

export default HomeProducts
