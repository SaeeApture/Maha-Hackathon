import React from 'react'
import './Cart.css';
import Button from '../Button/Button';

function Cart({cartItems,onCheckout }) {

  const totalprice = cartItems.reduce((a,c)=>a + c.price * c.quantity, 0);

  return (
    <div className="cart_container">
     🛒
     
     <br /> 
       <span classname=" "> 
             Total Price:  Rs.{totalprice.toFixed(2)}</span>
       <Button 
       title={`${cartItems.length === 0 ? "Empty Cart" : " View Cart 🛒"} `} 
       type={"checkout"}
        diasable={cartItems.length === 0 ? true : false} 
        onClick={onCheckout}
        />
    </div>
  );
}

export default Cart
