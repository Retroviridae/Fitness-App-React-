import React from "react";
import { Card, Button, ListGroup, Form } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Edit() {
  return (
      <div>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header className="text-center">Goals</Card.Header>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/FIA_F1_Austria_2021_Nr._55_Sainz.jpg/1920px-FIA_F1_Austria_2021_Nr._55_Sainz.jpg" />
                <Card.Body>
                <form>
        <Row>
            <Form.Label column lg={2}>
            Goal Weight
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Workout" name='workout' value='200'  />
            </Col>
        </Row>
        
        <Row>
            <Form.Label column lg={2}>
            Primary Goal
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Details" name='details' value='Do 10 pullups'  />
            </Col>
        </Row>
        <Row>
            <Form.Label column lg={2}>
            Secondary Goal
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Details" name='details' value='Run 5 miles'  />
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