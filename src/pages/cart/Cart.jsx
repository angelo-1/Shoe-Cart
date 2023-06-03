import React,{useContext}from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'
import {useNavigate} from 'react-router-dom'

function Cart() {
  const {cartItem,getTotalAmount } =useContext(ShopContext)
  const totalAmount=getTotalAmount()
  const navigate = useNavigate()
  return (
    <>
    <div className='cart'>
      <div className='cartTitle'>
        <h1>Cart Items</h1>
        </div>
        <div className='cartItems'>
          {PRODUCTS.map((product)=>{
            if (cartItem[product.id] !==0){
              return <CartItem data={product} />
            }
          })}
        </div>
        {totalAmount>0 ?
        <div className='checkOut'>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={()=>navigate("/")}>Continue Shopping</button>
          <button>Ckeckout</button>
          
        </div>
        : <h2>Your Cart is Empty</h2>}
    </div>
    </>
  )
}

export default Cart