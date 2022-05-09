import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Workout from './Workout';
import React, {useEffect, useState} from 'react';
import Form from './Form';
import WorkoutList from './WorkoutList';

function App() {
  
  useEffect(() => {
    fetch("http://localhost:3000/workouts")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Header />
      <Form />
      <WorkoutList />
    </div>
  );
}

export default App;
