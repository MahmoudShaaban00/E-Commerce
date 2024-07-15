import React, { useState } from 'react'
import ProductDetail from './ProductDetail'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import './product.css'

const Product = ({product , setproduct , detail , view , close , setclose , addtocart,addtolove }) => {

  const { loginWithRedirect , isAuthenticated } = useAuth0();
  const filterproduct =(product) =>{
      const update = ProductDetail.filter((x)=>{
        return x.cart===product;
      })
      setproduct(update);
  }
  const AllProducts = () =>{
    setproduct(ProductDetail)
  } 

  return (
    <>
    {
      close ?
      <div className='product_detail'>
      <div className='container'>
        <button onClick={()=> setclose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          detail.map((curElm)=>{
            return(
              <div className='productbox'>
                <div className='img-box'>
                  <img src={curElm.img} alt={curElm.title} />
                </div>
                <div className='detail'>
                  <h4>{curElm.cart}</h4>
                  <h2>{curElm.title}</h2>
                  <p>A Screen Every will love: whether your family is st</p>
                  <h3>{curElm.price}</h3>
                  <button  onClick={()=> addtocart(curElm)}>Add To Cart</button>
                </div>
              </div>
            )
          })
        }
       
      </div>
    </div> : null
    }
   
   
    <div className='products'>
    <h3>3 Products</h3>
    <p>Home . Products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <ul>
            <li onClick={()=> AllProducts()}>AllProducts</li>
              <li onClick={()=> filterproduct('tablet')}>Tablet</li>
              <li onClick={()=> filterproduct('playstation')}>playstation</li>
              <li onClick={()=> filterproduct('Headphone')}>Headphone</li>
              <li onClick={()=> filterproduct('Camera')}>Camera</li>
              <li onClick={()=> filterproduct('Shoes')}>Shoes</li>
              <li onClick={()=> filterproduct('colthes')}>colthes</li>
              <li onClick={()=> filterproduct('shampoo')}>Shampoo</li>
              <li onClick={()=> filterproduct('iphone')}>Iphone</li>

            </ul>
          </div>
        </div>
   

    <div className='productbox'>
      <div className='content'>
        {
          product.map((curElm) =>
          {
              return(
                  <div className='box' key={curElm.id}>
                      <div className='img_box'>
                          <img src={curElm.img} alt={curElm.title} />
                          <div className='icon'>
                            {
                               isAuthenticated ?
                               <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart/></li>
                               :
                               <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart/></li>

                            }
                              <li onClick={() => view(curElm)}><MdOutlineRemoveRedEye /></li>
                              <li onClick={()=> addtolove(curElm)} ><FaRegHeart /></li>
                      
                          </div>
                      </div>
                      <div className='detail'>
                          <p>{curElm.cart}</p>
                          <h3>{curElm.title}</h3>
                          <h4>${curElm.price}</h4>
                      </div>
                  </div>
              )
          }
          )
      }
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Product