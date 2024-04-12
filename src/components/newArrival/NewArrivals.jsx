import './newArrival.css';
import Ndata from './Ndata';
import img from '../../images/new.png';
import Discount from '../discount/Discount';
import Banner from '../banner/Banner';
import Service from '../service/Service';
import HomeProducts from '../homeProducts/HomeProducts';



const NewArrivals = ({addToCart}) => {
    const data = Ndata;

  return (
   <>
    <div className='news'>
      <div className="news-content container">
        <div className="news-top">
      <img src={img} alt="" />
      <h2>New Arrivals</h2>
        </div>
      <div className="news-data ">
     {data.map(item =>{
        return(
            <div className='new'>
            <img src={item.cover} alt="" />
            <h2>{item.name}</h2>
            <p>{item.price}$</p>
            </div>
        )
     })}
    </div>
    </div>
    <Discount/>
    <HomeProducts addToCart = {addToCart}/>
    <Banner/>
    <Service/>
    </div>
   </>
  )
}

export default NewArrivals
