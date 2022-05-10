import React from "react";
import { Card, Button, ListGroup } from 'react-bootstrap/';

function Workout({ workout }) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header className="text-center">{workout.workout}</Card.Header>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/FIA_F1_Austria_2021_Nr._55_Sainz.jpg/1920px-FIA_F1_Austria_2021_Nr._55_Sainz.jpg" />
            <Card.Body>
                <Card.Text>Description: {workout.details}</Card.Text>
                <ListGroup>
                    <ListGroup.Item>Calories burned:{workout.calories}</ListGroup.Item>
                    <ListGroup.Item>Category: {workout.category}</ListGroup.Item>
                    <ListGroup.Item>Date: {workout.date}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Link to somewhere? Maybe show details?</Button>
            </Card.Body>    
    </Card>
  );
}

{/* <Card.Text>
{workout.details}
</Card.Text>
<Card.Text>
Calories burned:{workout.calories}
</Card.Text>
<Card.Text>
Category: {workout.category}
</Card.Text>
<Card.Text>
Date: {workout.date}
</Card.Text> */}
export default Workout;
