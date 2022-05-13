import React, {useState} from "react";
import { Card, Button, Form } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router";

function Edit({handleHomeEdit}) {
  let navigate = useNavigate();
  const [form, setForm ] = useState({
    weight: '',
    primary: '',
    secondary: ''
  })

  function handleChange (e) {
      const { name, value} = e.target;
      setForm((form) => ({...form, [name]: value}))
  }
    
  function handleSubmit (e) {
      e.preventDefault()
      handleHomeEdit(form)
      navigate("/")
  }
  return (
      <div>
        <Card border="primary" style={{ width: '40rem',margin:"auto" }}>
            <Card.Header className="text-center">Goals</Card.Header>
            <Card.Img variant="top" src="https://ih1.redbubble.net/image.1000561856.0547/pp,840x830-pad,1000x1000,f8f8f8.jpg" />
                <Card.Body>
                <form onSubmit={handleSubmit}>
        <Row>
            <Form.Label column lg={2}>
            Goal Weight
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Workout" name='weight'value={form.weight} onChange={handleChange} />
            </Col>
        </Row>
        
        <Row>
            <Form.Label column lg={2}>
            Primary Goal
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Details" name='primary'value={form.primary} onChange={handleChange} />
            </Col>
        </Row>
        <Row>
            <Form.Label column lg={2}>
            Secondary Goal
            </Form.Label>
            <Col xs={7}>
            <Form.Control type="text" placeholder="Details" name='secondary'value={form.secondary} onChange={handleChange}  />
            </Col>
        </Row>
        {/* <NavLink to="/"> */}
            <Button variant="primary" type="submit">Submit</Button>
        {/* </NavLink> */}
            </form>
                {/* <Button variant="primary" >Submit</Button> */}
                </Card.Body>    
        </Card>
        
      </div>
  );
}

export default Edit;
