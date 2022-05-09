import React from "react";
import Workout from "./Workout";

function WorkoutList({workouts}) {
  const workoutMaker = workouts.map(work => {
    return (
      <Workout
      key={work.id}
      work={work}
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
