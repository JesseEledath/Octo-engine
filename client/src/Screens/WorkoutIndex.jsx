import React from "react";
import { getAllWorkouts } from "../Services/workout";
import { useState, useEffect } from "react";
function WorkoutIndex(props) {
  // State
  const [workouts, setWorkouts] = useState([]);
  const { currentUser } = props;
  // Getting data
  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutData = await getAllWorkouts();
      setWorkouts(workoutData);
    };
    if (currentUser) {
      fetchWorkouts();
    }
  }, [currentUser]);

  return (
    <div>
      <h3>Workouts</h3>
      {workouts.map((workout) => (
        <div className="workout-container" key={workout.id}>
          <h3>{workout.category}</h3>
          <p>{workout.content}</p>
          <p>Do for {workout.time}</p>
          <p>Will burn roughly {workout.calories}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkoutIndex;
