import React,{useContext} from 'react'
import { ShopContext } from '../../context/ShopContext';

function CartItem(props) {
    const {id,productName,price,productImage} =props.data;
    const {cartItem,addToCart,removeFromCart,updateItemCount } =useContext(ShopContext)
  return (
    <>
    <div className='cartItem'>
        <img src={productImage} alt="img" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'> 
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItem[id]} onChange={(e)=>updateItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartItem