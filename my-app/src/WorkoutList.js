import React from "react";
import Workout from "./Workout";

function WorkoutList({workoutArr}) {
  // const workoutMaker = workoutArr.map(workOut => {
  //   return (
  //     <Workout
  //     key={workOut.id}
  //     workOut={workOut} 
  //     />
  //   )
  // })
  return (
      <div>
          <Workout />
          
      </div>
  );
}

export default WorkoutList;
