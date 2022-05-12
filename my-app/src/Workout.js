import React from "react";
import { Card, Button, ListGroup } from 'react-bootstrap/';
import { Link } from 'react-router-dom'

function Workout({ workout, deleteInfo, handleEditId }) {
  const {id} = workout
  const body = "https://media4.giphy.com/media/Kb4K88iD29VH52YoJM/giphy.gif?cid=790b7611919104b5dbff570414c8538b98280720fbb3b41d&rid=giphy.gif&ct=s"
  const bike = "https://media0.giphy.com/media/hsfd5I391lIZ3x8upg/giphy.gif?cid=790b76112b4545137a8c155720530deb7bd9845a0cbcacba&rid=giphy.gif&ct=s"
  const weights = "https://monophy.com/media/gk4BzupRmq6mU5PclS/monophy.gif"
  const sports = "https://st2.depositphotos.com/1413332/8448/v/600/depositphotos_84482438-stock-illustration-sport-text-logo-vector.jpg"
  const blank = "https://ih1.redbubble.net/image.696077935.6074/flat,750x1000,075,f.u4.jpg"
  const emoji = ()=>{
    if (workout.category === "Cardio"){
      return bike
    }else if (workout.category === 'Weights'){
      return weights
    }else if (workout.category === 'Sports'){
      return sports
    }else if (workout.category === 'Body Weight'){
      return body
    }else  {
      return blank
    }
    
  }

 
  function deleteHandler(id) {
    deleteInfo(id)

    fetch(`http://localhost:3000/workouts/${id}`, 
      { method: 'DELETE' })
      // .then(res => res.json())
      // .then(data => console.log(data))
  }

  function handleEdit() {
    handleEditId(id)
  }

    return (
    <Card border="secondary" style={{ width: '18rem' , marginRight: 20}}>
        <Card.Header className="text-center">{workout.workout}</Card.Header>
        <Card.Img variant="top" src={emoji()} />
            <Card.Body>
                <Card.Text>Description: {workout.details}</Card.Text>
                <ListGroup>
                    <ListGroup.Item>Calories burned: {workout.calories}</ListGroup.Item>
                    <ListGroup.Item>Category: {workout.category}</ListGroup.Item>
                    <ListGroup.Item>Date: {workout.date}</ListGroup.Item>
                </ListGroup>
                <Link to={`/workouts/${id}/edit`}>
                  <Button  variant="primary" onClick={() => handleEdit(id)}>Edit</Button>
                </Link>
                <Button variant="warning" onClick={() => deleteHandler(id)}>Delete</Button>
            </Card.Body>    
    </Card>
  );
}

export default Workout;
