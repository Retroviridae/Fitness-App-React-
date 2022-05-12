import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup, Form } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
      <div>
        <Card border="primary" style={{ width: '40rem' , margin: 'auto'}}>
        <Card.Header className="text-center">"I am ready to face any challenges that might be foolish enough to face me"</Card.Header>
        <Card.Img variant="top" src="https://ih1.redbubble.net/image.1000561856.0547/pp,840x830-pad,1000x1000,f8f8f8.jpg" />
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>Goal Weight: 235lbs </ListGroup.Item>
                    <ListGroup.Item>Primary goal: Be promoted to CEO </ListGroup.Item>
                    <ListGroup.Item>Seconday goal: Marry Gretchen instead of Angela   </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" href="/edit">Edit</Button>
            </Card.Body>    
        </Card>
      </div>
  );
}

export default Home;
