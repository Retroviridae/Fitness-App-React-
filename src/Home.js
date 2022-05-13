import React from "react";
import { Card, Button, ListGroup, Form } from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';

function Home({homeEdit}) {
  const {weight, primary, secondary} = homeEdit
  
  return (
      <div>
        <Card border="primary" style={{ width: '40rem' , margin: 'auto'}}>
        <Card.Header className="text-center" style={{fontSize: '22px'}} >
          "I am ready to face any challenges that might be foolish enough to face me"</Card.Header>
        <Card.Img variant="top" src="https://ih1.redbubble.net/image.1000561856.0547/pp,840x830-pad,1000x1000,f8f8f8.jpg" />
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item><b>Goal Weight:</b> {weight} </ListGroup.Item>
                    <ListGroup.Item><b>Primary goal:</b> {primary} </ListGroup.Item>
                    <ListGroup.Item><b>Seconday goal:</b> {secondary}   </ListGroup.Item>
                </ListGroup>
                <NavLink to="/edit">
                  <Button variant="primary" >Edit</Button>
                </NavLink>
            </Card.Body>    
        </Card>
      </div>
  );
}

export default Home;
