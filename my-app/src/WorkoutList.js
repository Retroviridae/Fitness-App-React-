import React from "react";
import Workout from "./Workout";
import {CardGroup ,Row, Container} from 'react-bootstrap/';

function WorkoutList({ workouts, deleteInfo, handleEditId}) {
  
  //// ORDERED ARRAY NOT CALLED YET //////
  const orderedWorkouts = workouts.slice().sort(function(a,b){
    return new Date(b.date) - new Date(a.date)})
  return (
      <div>
        <h1 style={{textAlign: 'center'}}>Recent Workouts</h1>
        <Container >
          <Row className="g-5" >
            {/* <CardGroup > */}
              {workouts.map(workout=> {
                return (
                  <Workout 
                    workout={workout}
                    key={workout.id} 
                    deleteInfo={deleteInfo}
                    handleEditId={handleEditId}
                />)})}
            {/* </CardGroup> */}
          </Row>
        </Container>
      </div>
  );
}

export default WorkoutList;
