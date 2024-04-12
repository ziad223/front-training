import './about.css';
import img from '../../images/about.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='about container'>
       <h2>About <span>Us</span></h2>
       <div className="about-content">
        <div className="about-left">
          <img src={img} alt="" />
        </div>
        <div className="about-right">
          <h1>Welcome To Bravo Shop</h1>
          <h3>
            <span>Bravo Shop</span> is Best online Shopping Company
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.
          </h3>
          <Link to='/fakeProducts'>
          <button>Shop Now</button>
          </Link>
        </div>
       </div>
    </div>
  )
}

export default About
