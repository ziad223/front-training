import './service.css';
import { FaTruck , FaAddressCard , FaHeadset ,FaShieldAlt   } from "react-icons/fa";


const Service = () => {
  return (
    <div className='services container'>
      <div className="service">
      <FaTruck className='service-icon'/>
      <h3>Worldwide Delivery</h3>
      <p>
      We offer competitive prices on our 100 million plus product any range.
      </p>
      </div>
      <div className="service">
      <FaAddressCard className='service-icon'/>
      <h3>Safe Payment</h3>
      <p>
      We offer competitive prices on our 100 million plus product any range.
      </p>
      </div>
      <div className="service">
      <FaShieldAlt className='service-icon'/>
      <h3>Shop With Confidence</h3>
      <p>
      We offer competitive prices on our 100 million plus product any range.
      </p>
      </div>
      <div className="service">
      <FaHeadset className='service-icon'/>
      <h3>24/7 Support</h3>
      <p>
      We offer competitive prices on our 100 million plus product any range.
      </p>
      </div>
    </div>
  )
}

export default Service
