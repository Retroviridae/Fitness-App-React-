import React from "react";
import Workout from "./Workout";

function WorkoutList({ workouts, deleteInfo, deletedId }) {
  const filteredWorkouts = workouts.filter(workout => workout.id !== deletedId)
  return (
      <div>
          {filteredWorkouts.map(workout=> <Workout workout={workout}key={workout.id} deleteInfo={deleteInfo}/>)}
      </div>
  );
}

export default WorkoutList;
