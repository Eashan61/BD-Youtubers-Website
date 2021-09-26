import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
 // console.log(props);
 const {name,roll,country,age,Fees,img} = props.product;
 return (
  <div className="col-md-4">
   <div className="card mb-3">
  <img src={img} className="card-img-top" style={{height:"300px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <h6 className="card-text">Profession: {roll}</h6>
    <h6 className="card-text">Country: {country}</h6>
    <h6 className="card-text">age: {age}</h6>
    <h6 className="card-text">Fees: {Fees} <span className="taka">&#2547;</span></h6>
    <button onClick={()=> props.handleAddToCart(props.product, name)}
    className="btn-danger"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
    
  </div>
</div>
  </div>
 );
};

export default Product;