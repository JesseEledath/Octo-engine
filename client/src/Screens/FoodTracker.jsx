import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllFoods, destroyFood } from "../Services/food";
function FoodTracker(props) {
  const [foods, setFoods] = useState([]);
  const { currentUser } = props;
  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await getAllFoods();
      setFoods(foodData);
    };
    if (currentUser) {
      fetchFoods();
    }
  }, [currentUser]);
  const handleDelete = async (id) => {
    await destroyFood(id);
    setFoods((prevState) => prevState.filter((food) => food.id !== id));
  };
  return (
    <div>
      {foods.map((foodItem) => (
        <div key={foodItem.id}>
          {foodItem.food_name}
          {foodItem.calories}
          <Link to={`/foods/${foodItem.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(foodItem.id)}>Delete</button>
        </div>
      ))}
      <Link to="/foods/new">
        <button>Add a food</button>
      </Link>
    </div>
  );
}

export default FoodTracker;
