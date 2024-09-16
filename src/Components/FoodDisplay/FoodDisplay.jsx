import React, { useContext } from "react";
import { StoreContext } from '../../context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';
import './FoodDisplay.css';

export const FoodDisplay = ({ category }) => {
    const {food_list}=useContext(StoreContext)
    return (
        <div className="food-display" id='food-display'>
            <h2>Top dishes near to You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category==="All" || category===item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name}
                        description={item.description} price={item.price} image={item.image} />
                    }

                })}
            </div>
        </div>
    )
}
export default FoodDisplay;