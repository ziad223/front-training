import './cart.css';

const Cart = ({cartItems , removeProduct , addToCart , decreaseProduct}) => {
    let total = 0;
  return (
    <>
    <div className='cartPage container'>
    {cartItems.length == 0 ? 
     <h2 className='no-products'>No Exists Any Products in The Cart</h2>
     :
     <div className='cart'>
     <div className="cart-products">
      {cartItems.map(item => {
       total = total + (item.price * item.qty)
       return(
           <div className='productCart'>
           <img src={item.image ? item.image : item.thumbnail} alt="" />
            <h5><span>x</span>{item.qty}</h5>
           <div className="counter">
               <button onClick={() =>addToCart(item)}>+</button>
               <h3>{item.qty}</h3>
               <button onClick={() =>decreaseProduct(item)}>-</button>
           </div>
           <h3>Price : ${item.price * item.qty}</h3>
           <button onClick={() =>removeProduct(item)}>Remove From Cart</button>
           </div>
       )
      })}
     </div>
     <div className="total">
    <div>
    <h3>Total :</h3>
    <h4>${total.toString().slice(0 , 6)}</h4>
    </div>
     </div>
   </div>
   
  }
  </div>
    </>
  )
}

export default Cart
