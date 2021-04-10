import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import { putFood, getOneFood } from '../Services/food'

function EditFood(props) {
  // States =====================================
  const [formData, setFormData] = useState({
    food_name: "",
    calories: "",
  });
  const history = useHistory()
  const {id} = useParams()
  // useEffect to get specific data
  useEffect(() => {
    const getAFood = async () => {
      const foodData = await getOneFood(id)
      const { food_name, calories} = foodData
      setFormData({
        food_name ,
        calories
      })
    }
    getAFood()
  },[id])
  // Handles
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await putFood(id, formData)
    history.push('/foods')
}
  const { food_name, calories } = formData;
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

export default EditFood;
