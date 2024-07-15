import React from 'react'
import {  Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import image from '../component/images/imag.jpg'
import tablet from '../component/images/matepad-pro-series-card-1.jpg'
import mobile from '../component/images/33.jpg'
import headphone from '../component/images/headphone.jpg'
import watch from '../component/images/4.jpg'
import './home.css'
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import HomeProduct from './HomeProduct';
import { useAuth0 } from "@auth0/auth0-react";
const Home = ({ detail , view , close , setclose ,addtocart, addtolove}) => {

    
  const { loginWithRedirect , isAuthenticated } = useAuth0();

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
                  <button>Add To Cart</button>
                </div>
              </div>
            )
          })
        }
       
      </div>
    </div> : null
    }
   
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Note Book Collection 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
      
        <div className='img_box'>
            <img src={image} alt="saleimage" style={{width:400,height:300}}/>
        </div>
        </div>
    </div>

    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src={mobile} alt="mobile" />
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src={tablet} alt="tablet" />
                </div>
                <div className='detail'>
                    <p>18 products</p>
                </div>
            </div> 
             <div className='box'>
                <div className='img_box'>
                    <img src={headphone} alt="headphone" />
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div> 
             <div className='box'>
                <div className='img_box'>
                    <img src={watch} alt="watch" />
                </div>
                <div className='detail'>
                    <p>62 products</p>
                </div>
            </div>  
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
               <div className='icon'>
                   <FiTruck />
               </div>
               <div className='detail'>
                <h3>free shipping</h3>
                <p>Order above $1000</p>
               </div>
            </div>
            <div className='box'>
               <div className='icon'>
               <BsCurrencyDollar />
               </div>
               <div className='detail'>
                <h3>Return & refund</h3>
                <p>money back Gaurenty</p>
               </div>
            </div>
            <div className='box'>
               <div className='icon'>
               <HiOutlineReceiptPercent />
               </div>
               <div className='detail'>
                <h3>Member Discount</h3>
                <p>on every order</p>
               </div>
            </div>
            <div className='box'>
               <div className='icon'>
               <BiHeadphone />
               </div>
               <div className='detail'>
                <h3>Customer Support</h3>
                <p>every time call support</p>
               </div>
            </div>
        </div>
    </div>

    <div className='product'>
        <h2>top products</h2>
        <div className='container'>
            {
           HomeProduct.map((curElm) =>
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
                                <li onClick={() => addtolove(curElm)}><FaRegHeart /></li>
                        
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
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple ipad 10.2 9th Gen - 2021</h3>
                        <p>$ 986</p>
                        <Link to='/product' className='link' >Shop Now  < BsArrowRight/></Link>
                    </div>
                    <div className='box_img'>
                        <img src="./img/iphonetablet.jpg" alt="sliderimg"  style={{width:500,height:350}}/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Home