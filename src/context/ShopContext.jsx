import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';
import { Prev } from 'react-bootstrap/esm/PageItem';

export const ShopContext = createContext(null);


function ShopContextProvider(props) {
    const getDefaultCart=()=>{
        let cart={}
        for (let i=1; i<PRODUCTS.length+1;i++){
            cart[i]=0
        }
        return cart;
    }
    const [cartItem,setCartItem]=useState(getDefaultCart);

    const addToCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const updateItemCount =(newAmount,itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:newAmount}))
    }

    const getTotalAmount =()=>{
        let totalAmount =0;
        for (const item in cartItem){
            if (cartItem[item]>0){
                let itemInfo = PRODUCTS.find((product)=>product.id === Number(item))
                totalAmount += cartItem[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const contextValue ={cartItem,addToCart,removeFromCart,updateItemCount,getTotalAmount}
  return (
    <div><ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider></div>
  )
}

export default ShopContextProvider