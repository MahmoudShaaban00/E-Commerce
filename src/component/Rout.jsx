import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Cart from './Cart'
import Contact from './Contact'
import Love from './Love'

const Rout = ({product , setproduct , detail , view , close , setclose , cart , setcart , addtocart ,love,setlove ,addtolove}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home  detail={detail} view={view}  close={close} setclose={setclose} addtocart={addtocart} addtolove={addtolove}/>}/>
        <Route path='/product' element={<Product product={product} setproduct={setproduct} detail={detail} view={view}  close={close} setclose={setclose}  addtocart={addtocart} addtolove={addtolove}/>} />
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />}  />
        <Route path='/love' element={<Love love={love} setlove={setlove} />}  />
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Rout

