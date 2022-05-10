import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import React, { useState, useEffect } from 'react';


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
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
}

export default App;