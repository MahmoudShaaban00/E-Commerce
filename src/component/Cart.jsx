import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import './cart.css'


const Cart = ({cart ,setcart}) => {

//increase incqty
  const incqty = (product) =>
  {
    const exsit =cart.find((x)=>
    {
      return x.id === product.id
    })
    setcart(cart.map((curElm)=>
    {
      return curElm.id === product.id ? {...exsit, qty: exsit.qty +1} : curElm
    }))
  }

    //decrease qty
     const decqty = (product) =>
  {
    const exsit =cart.find((x)=>
    {
      return x.id === product.id
    })
    setcart(cart.map((curElm)=>
    {
      return curElm.id === product.id ? {...exsit, qty: exsit.qty -1} : curElm
    }))
  }

  // remove product 
  const removeproduct =(product) =>
  {
    const exsit =cart.find((x)=>
    {
      return x.id === product.id
    })
    if(exsit.qty > 0){

      setcart(cart.filter((x)=> 
      {
         return x.id !== product.id
      
      }))
    }
  }

  // totalprice
 const  totalprice =cart.reduce((price,item) => price + item.qty * item.price,0)

 // buy 
 const  buy =()=>{
  alert("product buying")
 }

  return (
    <>
    <div className='cartcontainer'>
      { cart.length === 0 && 
        <div className='emptycart'>
          <h2 className='empty'>Cart is Empty</h2>
          <Link to='/product' className='emptycartbtn'>Shop Now</Link>
          </div>
      }
      <div className='content'>
        {
          cart.map((curElm) => 
          {
            return(
              <div className='cart_item' key={curElm.id}>
                <div className='img_box'>
              <img src={curElm.img} alt={curElm.title}></img>
              </div>
                <div className='detail'>
                  <div className='info'>
                <h4>{curElm.cart}</h4>
                <h3>{curElm.title}</h3>
                <h3>price: ${curElm.price}</h3>
                <div className='qty'>
                  <button className='incqty' onClick={()=> incqty(curElm)}>+</button>
                  <input type="text" value={curElm.qty} />
                  <button className='decqty' onClick={() => decqty (curElm)}>-</button>
                  </div>
                  <h4 className='subtotal'>totalprice: ${curElm.price * curElm.qty}</h4>
                  </div>
                  <div className='close'>
                <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                </div>
              </div>
              </div>
            )
            
        })
        }
  
      </div>
      {
        cart.length > 0 &&
        <>
              <h2 className='totalprice'>totalprice: ${totalprice}</h2>
              <button className='checkout' onClick={()=> buy()}>Checkbox</button>
        </>
      }
    </div>
    </>
  )
}

export default Cart