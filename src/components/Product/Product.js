import React from 'react';
import './Product.css';
const Product = (props) => {
 // console.log(props);
 const {name,roll,country,age,Fees,img} = props.product;
 return (
  <div className="col-md-4">
   <div class="card mb-3">
  <img src={img} class="card-img-top" style={{height:"300px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name: {name}</h5>
    <h6 class="card-text">Profession: {roll}</h6>
    <h6 class="card-text">Country: {country}</h6>
    <h6 class="card-text">age: {age}</h6>
    <h6 class="card-text">Fees: {Fees} <span className="taka">&#2547;</span></h6>
    <button onClick={()=> props.handleAddToCart(props.product, name)}
    className="btn-danger">Add to cart</button>
    
  </div>
</div>
  </div>
 );
};

export default Product;