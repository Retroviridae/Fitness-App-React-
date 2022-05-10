import React from "react";
import { Card, Button, ListGroup } from 'react-bootstrap/';

function Home() {
  return (
      <div>
            <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header className="text-center">Goals</Card.Header>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/FIA_F1_Austria_2021_Nr._55_Sainz.jpg/1920px-FIA_F1_Austria_2021_Nr._55_Sainz.jpg" />
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>Goal Weight: from form weight</ListGroup.Item>
                    <ListGroup.Item>Primary goal: get big  </ListGroup.Item>
                    <ListGroup.Item>Seconday goal: punch my computer </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Edit</Button>
            </Card.Body>    
    </Card>
      </div>
  );
}

export default Home;
