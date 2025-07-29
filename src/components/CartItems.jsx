import React from 'react'
import checkRemove from "../assets/delred.png"

const CartItems = ({cartItem, handleDeleteItem}) => {
    const {title, thumbnailImage, price, quantity} = cartItem || [];
    const {sale} = price || [];
  return (
    <div className="checkCartrow">
        <div className="checkMedia">
            <div className="checkImg">
                <img src={thumbnailImage} className="img-fluid" alt={title} />
            </div>
            <div className="checkproDetails">
                <div className="checkproName">
                {title} x {quantity}
                </div>
                <div className="remove" onClick={handleDeleteItem}>
                    <img src={checkRemove} className="img-fluid" alt="Delete"/>
                </div>
            </div>
        </div>
        <div className="checksinglePrice">
            Rs. <span className="checkp">{sale?.toFixed(2)}</span>
        </div>
    </div>
  )
}

export default CartItems
