import React from "react";
import Workout from "./Workout";

function WorkoutList({ workouts, deleteInfo, handleEditId}) {
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
