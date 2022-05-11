import React from "react";
import { Card, Button, ListGroup, Form } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Edit() {
  return (
      <div>
        <Card border="primary" style={{ width: '40rem',margin:"auto" }}>
            <Card.Header className="text-center">Goals</Card.Header>
            <Card.Img variant="top" src="https://ih1.redbubble.net/image.1000561856.0547/pp,840x830-pad,1000x1000,f8f8f8.jpg" />
                <Card.Body>
                <form >
        <Row>
            <Form.Label column lg={2}>
            Goal Weight
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Workout" name='weight'value={"coming soon"}  />
            </Col>
        </Row>
        
        <Row>
            <Form.Label column lg={2}>
            Primary Goal
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Details" name='primary'value={"coming soon"}  />
            </Col>
        </Row>
        <Row>
            <Form.Label column lg={2}>
            Secondary Goal
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Details" name='secondary'value={"coming soon"}   />
            </Col>
        </Row>

            </form>
                <Button variant="primary" href="/">Submit</Button>
                </Card.Body>    
        </Card>
        
      </div>
  );
}

export default Edit;
