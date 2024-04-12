import './discount.css';
import img from '../../images/discount.png';
import Ddata from './Ddata';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discount = () => {
const data = Ddata;
var settings = {
    dots: true,
    infinite: true,
    autoplay : true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]

  };

  return (
    <div className='dicount-data'>
     <div className="discount-content container">
     <div className="discount-top">
      <img src={img} alt="" />
      <h2>Big Discounts</h2>
      </div>
        <Slider className="discount-down" {...settings}>
        {/* <div className="discount-down"> */}
      {data.map(item =>{
        return(
            <div className='discount'>
            <img src={item.cover} alt="" />
            <h2>{item.name}</h2>
            <p>{item.price}$</p>
            </div>
        )
      })}
      {/* </div> */}
      </Slider>
      </div>
     </div>
  )
}

export default Discount
