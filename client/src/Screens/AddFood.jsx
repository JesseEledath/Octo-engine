import React from "react";
import { useState } from "react";
import { postFood } from '../Services/food'
import { useHistory} from 'react-router-dom'
function AddFood(props) {
  const [formData, setFormData] = useState({
    food_name: "",
    calories: "",
  });
  const { food_name, calories } = formData;
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postFood(formData)
    history.push('/foods')
}
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={food_name}
          name="food_name"
          onChange={handleChange}
        />
      </label>

      <label>
        Calories:
        <input
          type="text"
          value={calories}
          name="calories"
          onChange={handleChange}
        />
      </label>
      <button> Submit </button>
    </form>
  );
}

export default AddFood;
