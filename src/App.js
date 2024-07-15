import Nav from "./component/Nav";
import React from "react";
import Rout from "./component/Rout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import ProductDetail from "./component/ProductDetail";
import { useState } from "react";
import {  ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  //detailsproduct
  const [detail,setDetail]=useState([])
  //carts
  const [cart,setcart]=useState([])
  //close
  const [close ,setclose]=useState(false)

  //love
  const [love,setlove]=useState([])
   //handledata
  const [product,setproduct]=useState(ProductDetail)
  // search
  const searchbtn =(product) =>{
   const change = ProductDetail.filter((x) => {
    return x.cart ===product
   })
   setproduct(change);
  }

  //show
  const view =(product)=>{
  setDetail([{...product}])
  setclose(true)
  }


 
  //add cart
  const addtocart =(product) => 
  {
    const exsit = cart.find((x) =>{
      return x.id===product.id;
})
    if(exsit){
      alert('this product is already added to cart')
    }
    else{

      setcart([...cart, {...product, qty:1}])
      alert('product is added to cart')
    }
  }

  const addtolove =(product) => 
  {
    const exsi = cart.find((z) =>{
      return z.id===product.id;
})
    if(exsi){
      alert('this product is already added to love')
    }
    else{

      setlove([...cart, {...product, qty:1}])
      alert('product is added to love')
    }
  }


  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}></Nav>
    <Rout product={product} setproduct={setproduct} detail={detail} view={view} close={close} setclose={setclose} cart={cart} setcart={setcart} addtocart={addtocart} love={love} setlove={setlove} addtolove={addtolove}></Rout>
    <Footer></Footer>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
