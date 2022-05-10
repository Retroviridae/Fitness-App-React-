import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import React, { useState, useEffect } from 'react';
import { Route, useHistory } from "react-router-dom";
import Home from './Home';
import Edit from './Edit';


function App() {
  // const history = useHistory();
  const [workoutArr, setWorkoutArr] =useState([])
  const [form,setForm]=useState({
    workout:"",
    category:"",
    details:"",
    date:"",
    calories:""
  })
  useEffect(()=>{
    fetch("http://localhost:3000/workouts")
    .then(resp =>resp.json())
    .then(data => setWorkoutArr(data))
  } 
    ,[])
  function handleFormChange(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/workouts",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
  }).then(resp => resp.json())
  .then(data => setWorkoutArr([...workoutArr,data]))
  setForm({
    workout:"",
    category:"",
    details:"",
    date:"",
    calories:""
    
  })
  // history.push('/workouts');

  } 

  //takes in id from workout to filter
  function deleteInfo(id){
    const filteredWorkouts = workoutArr.filter(workout => workout.id !== id)
    setWorkoutArr(filteredWorkouts)
  }

  return (
    <div>
      <Header />
    <Route exact path="/">
      {/* <p>This is the home page</p> */}
      <Home />
    </Route>
    <Route path="/new">
      <WorkoutForm form={form} handleFormChange={handleFormChange} handleSubmit={handleSubmit}/>
    </Route>
    <Route path="/workouts">
      <WorkoutList workouts={workoutArr} deleteInfo={deleteInfo} />
    </Route>
    <Route path="/edit">
      <Edit />
    </Route>
    </div>
  );
}
export default App;