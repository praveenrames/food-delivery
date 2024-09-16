import React, { useContext } from "react";
import { assets } from '../../assets/assets.js'
import { StoreContext } from '../../context/StoreContext.jsx';
import './FoodItem.css';

const FoodItem = ({id,price,description,image,name}) => {
    // add to cart
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt="" />
                {!cartItems[id] ? (
                    <img className="add" onClick={() => addToCart(id)} src={assets.addWhite} alt="" />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={() =>removeFromCart(id)} src={assets.removeIconRed} alt="" />
                    <p>{cartItems[id]}</p>
                        <img onClick={() =>addToCart(id)} src={assets.addGreen} alt="" />
                   </div> // This div seems unnecessary you might want to remove it
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.ratingStarts} alt="" />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
};

export default FoodItem;