import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";


function App() {
  const [workoutArr, setWorkoutArr] =useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/workouts")
    .then(resp =>resp.json())
    .then(data => setWorkoutArr(data))
  }
    ,[])


  return (
    <div>
      <Header />
    <Route exact path="/">
      <p>This is the home page</p>
      {/* <WorkoutList workouts={workoutArr}/>
      <WorkoutForm /> */}
    </Route>
    <Route path="/new">
      <WorkoutForm />
    </Route>
    <Route path="/workouts">
      <WorkoutList workouts={workoutArr}/>
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