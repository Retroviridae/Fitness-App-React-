import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup, Form } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({ goals }) {
  return (
      <div>
        <Card border="primary" style={{ width: '40rem' }}>
        <Card.Header className="text-center">Goals</Card.Header>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/FIA_F1_Austria_2021_Nr._55_Sainz.jpg/1920px-FIA_F1_Austria_2021_Nr._55_Sainz.jpg" />
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>Goal Weight: {goals.weight}</ListGroup.Item>
                    <ListGroup.Item>Primary goal: {goals.primary} </ListGroup.Item>
                    <ListGroup.Item>Seconday goal: {goals.secondary} </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" href="/edit">Edit</Button>
            </Card.Body>    
        </Card>
        {/* <form>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form> */}
      </div>
  );
}

export default Home;
