import React from 'react';
import './Cart.css';
const Cart = (props) => {
 const {cart} = props;
 let total = 0;
 for (const product of cart){
  total = total + parseInt(product.Fees);
 }
 return (
  <div>
   <h3>People added: {props.cart.length}</h3>
<h3>Total cost: {total}</h3>
<h3>Added Persons:</h3>
{
 props.names.map((name,i)=> <h3 key={i}>{name}</h3>)
}
  </div>
 );
};

export default Cart;