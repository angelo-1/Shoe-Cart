import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'
export const Product = (props) => {
    const {id,productName,price,productImage} =props.data;
    const {addToCart,cartItem } =useContext(ShopContext)

    const CartItemCount =cartItem[id]
  return (
    <>
    <div className='product'>
        <img src={productImage} alt='productimage'/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartButn' onClick={()=> addToCart(id)}>Add To Cart {CartItemCount>0 && <>({CartItemCount})</>}</button>

    </div>
    </>
  )
}
