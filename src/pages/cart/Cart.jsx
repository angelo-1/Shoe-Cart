import React,{useContext}from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'

function Cart() {
  const {cartItem } =useContext(ShopContext)
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
    </div>
    </>
  )
}

export default Cart