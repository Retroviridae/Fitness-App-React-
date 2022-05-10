import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import Home from './Home';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'



function App() {
  const [workoutArr, setWorkoutArr] =useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/workouts")
    .then(resp =>resp.json())
    .then(data => setWorkoutArr(data))
  },[])
  console.log(workoutArr)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/workouts/new">
          <WorkoutForm />
        </Route>
        <Route path="/workouts">
          <WorkoutList workoutArr={workoutArr}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;