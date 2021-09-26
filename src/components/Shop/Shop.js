import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [names, setNames] = useState([]);

   useEffect(() => {
      fetch('./youtubers.JSON')
      .then(res => res.json())
      .then(data => setProducts(data));
   },[])

   const handleAddToCart =(product, name) => {
      const newCart = [...cart,product];
      const newName = [...names,name];
      setCart(newCart);

setNames(newName);
   }
 return (
  <div className="shop-container">

   <div className="product-container row">
    {
       products.map((product,i) => <Product key ={i}
         product={product}
         handleAddToCart={handleAddToCart}
       
       >

       </Product>)
    }
   </div>
   <div className="cart-container">
<Cart cart={cart} names= {names}></Cart>
   </div>

  </div>
 );
};

export default Shop;