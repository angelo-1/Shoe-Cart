import React from 'react'

function CartItem(props) {
    const {id,productName,price,productImage} =props.data;
  return (
    <>
    <div className='cartItem'>
        <img src={productImage} alt="img" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
    </div>
    </>
  )
}

export default CartItem