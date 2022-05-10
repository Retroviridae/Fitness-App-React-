import React from "react";
import Workout from "./Workout";

function WorkoutList({workoutArr}) {
  const workoutMaker = workoutArr.map(work => {
    
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
