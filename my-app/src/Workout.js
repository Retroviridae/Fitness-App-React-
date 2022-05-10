import React from "react";
import { Card, Button, ListGroup } from 'react-bootstrap/';

function Workout({ workout, deleteInfo }) {
  const bike = "http://www.emoji.co.uk/files/phantom-open-emojis/activity-phantom/12632-bicyclist.png"
  const weights = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-10/256/man-lifting-weights-medium-skin-tone.png"
  const sports = "https://img1.pnghut.com/3/4/3/KcFtrCUcgS/soccer-kick-team-sport-player-football-sports.jpg"
  const emoji = ()=>{
    if (workout.category === "Cardio"){
      return bike
    }else if (workout.category === 'Weights'){
      return weights
    }else if (workout.category === 'Sports'){
      return sports
    }
  }

  const {id} = workout
  function deleteHandler(id) {
    deleteInfo(id)

    fetch(`http://localhost:3000/workouts/${id}`, 
      { method: 'DELETE' })
      // .then(res => res.json())
      // .then(data => console.log(data))
  }

    return (
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header className="text-center">{workout.workout}</Card.Header>
        <Card.Img variant="top" src={emoji()} />
            <Card.Body>
                <Card.Text>Description: {workout.details}</Card.Text>
                <ListGroup>
                    <ListGroup.Item>Calories burned:{workout.calories}</ListGroup.Item>
                    <ListGroup.Item>Category: {workout.category}</ListGroup.Item>
                    <ListGroup.Item>Date: {workout.date}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Edit</Button>
                <Button variant="warning" onClick={() => deleteHandler(id)}>Delete</Button>
            </Card.Body>    
    </Card>
  );
}

export default Workout;
