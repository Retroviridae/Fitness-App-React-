import React from "react";
import Workout from "./Workout";

function WorkoutList({ workouts, deleteInfo, deletedId }) {
  return (
      <div>
          {workouts.map(workout=> <Workout workout={workout}key={workout.id} deleteInfo={deleteInfo}/>)}
      </div>
  );
}

export default WorkoutList;
