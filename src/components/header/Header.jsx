import './header.css';
import headerData from './headerData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Header = () => {
    const data = headerData;
    var settings = {
        dots: true,
        infinite: true,
        autoplay : true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='header container'>
     <Slider {...settings}>
      {data.map(item =>{
        return(
            <div className="header-content" key={item.id} >
           <div className="header-left">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>Visit Collection</button>
             </div>
             <div className="header-right">
                <img src={item.cover} alt="" />
             </div>
            </div>

        )
      })}
            </Slider >

    </div>
  )
}

export default Header
