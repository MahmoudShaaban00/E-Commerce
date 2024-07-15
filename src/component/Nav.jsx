import React, { useState } from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import "./nav.css"
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Nav = ({searchbtn}) => {
    const [search ,setsearch]=useState()
    const { loginWithRedirect ,logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
        <div className='icon'> <FaTruckMoving /></div>
        <p>FREE shipping when shopping upTo $1000</p>
    </div>

     <div className='main-header'>
        <div className='container'>
            <div className='logo'>
                <img src='./img/8Wt-ffSB_400x400.png' alt='logo' style={{width:130,height:70}}></img>
            </div>
            <div className='search-box'>
                <input type="text" value={search} placeholder='search product by name' autoComplete='off'  onChange={(e)=> setsearch(e.target.value)}/>
                <button onClick={() => searchbtn(search)}>search</button>
            </div>
            <div className='icon'>
                {
            isAuthenticated && 
                <div className='account'>
                    <div className='user-account'>
                <FaRegUser />
                </div>
                <p>Hello, {user.name}</p>
                </div>
            }
                
                <div className='second-icon'>
                    <Link to="/love" className='link'><AiOutlineHeart /></Link>
                    <Link to="/cart" className='link'><BsBagCheckFill /></Link>

                </div>
                </div>
        </div>
     </div>
     <div className='header'>
        <div className='container'>
      <div className='nav'>
      <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product' className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
            </ul>
      </div>
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                       :
                       <button onClick={ () => loginWithRedirect()}><CiLogin /></button> 

                }
            </div>
        </div>
     </div>
    </>
  )
}

export default Nav