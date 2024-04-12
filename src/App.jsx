import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import FakeProducts from './pages/fakeProducts/FakeProducts';
import DummyProducts from './pages/dummyProducts/DummyProducts';
import FakeSingle from './pages/fakeProducts/FakeSingle';
import DummySingle from './pages/dummyProducts/DummySingle';
import Cart from './pages/cart/Cart';
import { useState } from 'react';
import Swal from 'sweetalert2';

const App = () => {
  let [cartItems , setCartItems] = useState([]);
  let [dark , setDark] = useState(false);

  function isDark(){
    setDark(!dark)
  }

  function addToCart(product){
    let selectedProduct = cartItems.find(item => item.id == product.id);
    if(selectedProduct){
    setCartItems(cartItems.map(item => item.id == product.id ?
      {...selectedProduct , qty : selectedProduct.qty + 1} : item
    )
    )
    }else{
      setCartItems([...cartItems , {...product , qty : 1}])
      Swal.fire({
        title: "This Products Added In The Cart Successfully",
        icon: "success",
        timer : 1500,
        showConfirmButton : false
      });
    }
  }

  function removeProduct(product){
    setCartItems(cartItems.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Products Removed From The Cart Successfully",
      icon: "success",
      timer : 1500,
      showConfirmButton : false
    });
    
  }

  function decreaseProduct(product){
    let selectedProduct = cartItems.find(item => item.id == product.id);
     if(selectedProduct.qty == 1 ){
    setCartItems(cartItems.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Products Removed From The Cart Successfully",
      icon: "success",
      timer : 1500,
      showConfirmButton : false
    });

     }else{
      setCartItems(cartItems.map(item => item.id == product.id ?
        {...selectedProduct , qty : selectedProduct.qty - 1} : item
      )
      )
     }
  }



  return (
   <div className={dark ? 'app-dark' : 'app'}>
      <BrowserRouter>
      <Navbar cartItems = {cartItems} dark = {dark} isDark = {isDark}/>
    <Routes>
     <Route path='/' element = {<Home addToCart = {addToCart}/>}/>
     <Route path='/about' element = {<About/>}/>
     <Route path='/services' element = {<Services/>}/>
     <Route path='/contact' element = {<Contact/>}/>
     <Route path='/fakeProducts' element = {<FakeProducts addToCart = {addToCart}/>}/>
     <Route path='/dummyProducts' element = {<DummyProducts addToCart = {addToCart}/>}/>
     <Route path='/fakeSingle/:id' element = {<FakeSingle addToCart = {addToCart}/>}/>
     <Route path='/dummySingle/:id' element = {<DummySingle addToCart = {addToCart}/>}/>
     <Route path='/cart' element = {<Cart cartItems = {cartItems} removeProduct = {removeProduct} addToCart = {addToCart} decreaseProduct = {decreaseProduct}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
