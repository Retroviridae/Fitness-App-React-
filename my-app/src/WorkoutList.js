import React from "react";
import Workout from "./Workout";

function WorkoutList({ workouts }) {
  return (
      <div>
          {workouts.map(workout=> <Workout workout={workout}key={workout.id}/>)}
      </div>
  );
}

export default WorkoutList;
