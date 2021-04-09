import React from 'react';
import { getAllWorkouts } from '../Services/workout'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function WorkoutIndex(props) {
  // State
  const [workouts, setWorkouts] = useState([]);
  // Getting data
  useEffect(() => {
    const fetchFoods = async () => {
      const workoutData = await getAllWorkouts();
      setWorkouts(workoutData);
    }
    fetchFoods();
  }, [])


return (
    <div>
    <h3>Workouts</h3>
    {
      workouts.map(workout => {
        
      })
    }
    </div>
  );
}

export default WorkoutIndex;