import React from 'react'
import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useParams, useHistory } from 'react-router-dom'



function WorkoutEditForm({ form, handleFormChange, handleEditForm, editId}) {

  
  return (
    <form style={{ width: '40rem',margin: 'auto' }} onSubmit={(e)=>handleEditForm(e)}>
      <Row>
        <Form.Label column lg={2}>
          Workout
        </Form.Label>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Workout" name='workout' value={form.workout} onChange={(e)=>handleFormChange(e)} />
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Details
        </Form.Label>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Details" name='details' value={form.details} onChange={(e)=>handleFormChange(e)} />
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Calories
        </Form.Label>
        <Col xs={7}>
          <Form.Control type="number" placeholder="Calories" name='calories' value={form.calories} onChange={(e)=>handleFormChange(e)} />
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Category
        </Form.Label>
        <Col xs={7}>
          <Form.Select name='category' value={form.category} aria-label="Default select example" onChange={(e)=>handleFormChange(e)} >
            <option >Category</option>
            <option value="Cardio">Cardio</option>
            <option value="Weights">Weights</option>
            <option value="Sports">Sports</option>
            <option value="Body Weight">Body Weight</option>
          </Form.Select>
        </Col>
      </Row>
      
      <Row>
        <Form.Label column lg={2}>
          Date
        </Form.Label>
        <Col xs={3}>
          <Form.Control type="date" placeholder="Date" name='date' value={form.date} onChange={(e)=>handleFormChange(e)} />
        </Col>
      </Row>
      {/* <Link to="/workouts"> */}
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      {/* </Link> */}
    </form>

    
    
  )
}

export default WorkoutEditForm