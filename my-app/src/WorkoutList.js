import React, {useState} from "react";
import Workout from "./Workout";
import {Row, Container, Dropdown, DropdownButton} from 'react-bootstrap/';

function WorkoutList({ workouts, deleteInfo, handleEditId}) {
  const [ type, setType] = useState('All')

  function handleClick(e) {
    setType(e.target.name)
  }

  const orderedWorkouts = workouts.slice().sort(function(a,b){
    return new Date(b.date) - new Date(a.date)})

  const filteredArr = orderedWorkouts.filter(workout => {
    if(workout.category === type) {
      return workout
    }else if (type === 'All'){
      return workout
    }
  })

  
  //// ORDERED ARRAY NOT CALLED YET //////
  // const orderedWorkouts = workouts.slice().sort(function(a,b){
  //   return new Date(b.date) - new Date(a.date)})

  return (
      <div>
        <h1 style={{textAlign: 'center'}}>Recent Workouts</h1>

        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1" onClick={handleClick} name="All">All</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleClick} name="Weights">Weights</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleClick} name="Cardio">Cardio</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleClick} name="Sports">Sports</Dropdown.Item>
        </DropdownButton>

        <Container >
          <Row className="g-5" >
            {/* <CardGroup > */}
              {filteredArr.map(workout=> {
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
