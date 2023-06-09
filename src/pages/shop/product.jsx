import React, { useContext } from 'react'
import './shop.css'
import {ShopContext } from '../../context/shop-context'

const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemAmout =cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt="" srcset="" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
      <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart {cartItemAmout>0 && <>({cartItemAmout})</>}</button>
    </div>
  )
}

export default Product
