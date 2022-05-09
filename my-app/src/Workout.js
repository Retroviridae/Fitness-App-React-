import React from "react";
import './App.css';
import { Card, Button, Dropdown } from 'react-bootstrap/';

function Workout({workOut}) {
// const { workout, category, details, date, calories } = workOut

  return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/FIA_F1_Austria_2021_Nr._55_Sainz.jpg/1920px-FIA_F1_Austria_2021_Nr._55_Sainz.jpg" />
            <Card.Body>
                <Card.Title>Workout</Card.Title>
                <Card.Text>
                This is where the workout decsription will go.
                </Card.Text>
                <Card.Text>
                Calories burned:
                </Card.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Workout Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Cardio</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Strength</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary">Link to somewhere? Maybe show details?</Button>
            </Card.Body>    
        </Card>
  );
}

export default Workout;
