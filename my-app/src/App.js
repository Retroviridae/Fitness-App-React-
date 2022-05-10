import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";


function App() {
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

  //takes in id from workout to filter
  function deleteInfo(id){
    const filteredWorkouts = workoutArr.filter(workout => workout.id !== id)
    setWorkoutArr(filteredWorkouts)
  }

  return (
    <div>
      <Header />
    <Route exact path="/">
      <p>This is the home page</p>
      {/* <WorkoutList workouts={workoutArr}/>
      <WorkoutForm /> */}
    </Route>
    <Route path="/new">
      <WorkoutForm form={form} handleFormChange={handleFormChange}/>
    </Route>
    <Route path="/workouts">
      <WorkoutList workouts={workoutArr} deleteInfo={deleteInfo} />
    </Route>
    </div>
  );
}
export default App;
//   <Route path="/">
{/* <Header />
<WorkoutForm />
<WorkoutList workouts={workoutArr}/> */}
// </Route>