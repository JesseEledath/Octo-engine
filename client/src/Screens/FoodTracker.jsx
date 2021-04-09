import React from "react";
import { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import { getAllFoods } from "../Services/food";
function FoodTracker(props) {
  const [foods, setFoods] = useState([]);
  const { currentUser} = props
  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await getAllFoods();
      setFoods(foodData);
    };
    if (currentUser) {
      fetchFoods();
    }
  }, [currentUser]);
  return <div>
    {foods.map((foodItem) => (
      <div key= {foodItem.id} >
        {foodItem.food_name}
        {foodItem.calories}
        <button>Edit</button>
        <button>Delete</button>
        </div>
    ))}
    <Link to = '/food/new'>
      <button>Add a food</button>
      </Link>
  </div>;
}

export default FoodTracker;
