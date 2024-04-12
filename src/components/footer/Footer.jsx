import './footer.css';
import { PiGooglePlayLogo } from "react-icons/pi";
import { FaAppStore } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content container">
        <div className='footer-logo'>
         <h2>Bonik</h2>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quidem maxime eos nobis atque modi dolorum rem porro, numquam accusantium itaque a commodi accusamus repellendus fugiat officiis praesentium. Facere, enim?
         </p>
         <div className="a">
         <div>
            <PiGooglePlayLogo className='footer-icon'/>
            <span>Google Play</span>
         </div>
         <div>
            <FaAppStore className='footer-icon'/>
            <span>App Store</span>
         </div>
         </div>

        </div>
        <div>
            <h2>About Us</h2>
                <p>Careers</p>
                <p>Our Stores</p>
                <p>Our Cares</p>
                <p>Terms & Conditions</p>
                <p>Privacy Popcy</p>
        </div>
        <div>
            <h2>Customer Care</h2>
                <p> Careers</p>
                <p> How to Buy</p>
                <p> Track Your Order</p>
                <p> Corporate & Bulk Purchasing</p>
                <p> Returns & Refunds</p>
        </div>
        <div className='footer-contact'>
            <h2>Contct Us</h2>
             <div>
                <p>
                70 Wshington Squre South, New York, NY 10012, United States
                </p>
                <p>Email: Bravo Coding@gmail.com</p>
                <p>Phone: 0123456789</p>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
