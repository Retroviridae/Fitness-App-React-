import React from "react";
import Workout from "./Workout";

function WorkoutList({workouts}) {
  const workoutMaker = workouts.map(workout => {
    return (
      <Workout
      key={workout.id}
      workout={workout}
      />
    )
  })
  return (
      <div>
          {workoutMaker}
      </div>
  );
}

export default WorkoutList;
