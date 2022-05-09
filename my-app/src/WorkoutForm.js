import React from 'react'
import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function WorkoutForm() {
  return (
  //   <Form>
  //   <Form.Group className="mb-3" controlId="formBasicEmail">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //     <Form.Text className="text-muted">
  //       We'll never share your email with anyone else.
  //     </Form.Text>
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //     <Form.Check type="checkbox" label="Check me out" />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>

  // <Form>
  //   <Form.Group className="mb-3" >
  //     <Form.Label>Workout</Form.Label>
  //     <Form.Control type="text" placeholder="Workout" />
  //     <Form.Text className="text-muted">
  //     </Form.Text>
  //   </Form.Group>
  //   <Form.Group className="mb-3" >
  //     <Form.Label>Details</Form.Label>
  //     <Form.Control type="text" placeholder="Details" />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>

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