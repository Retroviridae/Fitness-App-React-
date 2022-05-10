import React from 'react'
import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function WorkoutForm() {
//   <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//       Workout Type
//   </Dropdown.Toggle>
//   <Dropdown.Menu>
//       <Dropdown.Item href="#/action-1">Cardio</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Strength</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
  return (
    <form>
      <Row>
        <Form.Label column lg={2}>
          Workout
        </Form.Label>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Workout" />
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Details
        </Form.Label>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Details" />
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Calories
        </Form.Label>
        <Col xs={7}>
          <Form.Control type="number" placeholder="Calories" />
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Category
        </Form.Label>
        <Col xs={7}>
          <Form.Select aria-label="Default select example">
            <option>Category</option>
            <option value="Cardio">Cardio</option>
            <option value="Weights">Weights</option>
            <option value="Sports">Sports</option>
          </Form.Select>
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Date
        </Form.Label>
        <Col xs={3}>
          <Form.Control type="date" placeholder="Date" />
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>

    
    
  )
}

export default WorkoutForm