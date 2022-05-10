import React from "react";
import Workout from "./Workout";

function WorkoutList({ workouts, deleteInfo, handleEditId}) {
  //// ORDERED ARRAY NOT CALLED YET //////
  const orderedWorkouts = workouts.slice().sort(function(a,b){
    return new Date(b.date) - new Date(a.date)})
  return (
      <div>
          {workouts.map(workout=> {
          return (
            <Workout 
              workout={workout}
              key={workout.id} 
              deleteInfo={deleteInfo}
              handleEditId={handleEditId}
          />)})}
      </div>
  );
}

export default WorkoutList;
