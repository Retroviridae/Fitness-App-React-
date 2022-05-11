import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import WorkoutEditForm from './WorkoutEditForm';
import React, { useState, useEffect } from 'react';
import { Route, Routes,useNavigate } from "react-router";
import Home from './Home';
import Edit from './Edit';
// import { Router } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { useNavigate } from 'react-router'


function App() {
  let navigate = useNavigate();
  const [workoutArr, setWorkoutArr] =useState([])
  const [editId, setEditId] = useState()
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
    navigate("/workouts")
      setForm({
        workout:"",
        category:"",
        details:"",
        date:"",
        calories:""
    
  })
} 

  function handleEditForm (e) {
    e.preventDefault()
    navigate("/workouts")
    fetch(`http://localhost:3000/workouts/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    }).then(res => res.json())
      .then(data => setWorkoutArr(workoutArr.map(workout => workout.id === data.id ? data : workout)));
      navigate("/workouts")
      setForm({
        workout:"",
        category:"",
        details:"",
        date:"",
        calories:""
    
  })
  }

  function handleEditId(id) {
    setEditId(id)
  }

  //takes in id from workout to filter
  function deleteInfo(id){
    const filteredWorkouts = workoutArr.filter(workout => workout.id !== id)
    setWorkoutArr(filteredWorkouts)
  }
  
  return (
     <div>
      {/* <BrowserRouter> */}
        <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<WorkoutForm form={form} handleFormChange={handleFormChange} handleSubmit={handleSubmit}/>} />
          <Route path="/workouts" element={<WorkoutList workouts={workoutArr} deleteInfo={deleteInfo} handleEditId={handleEditId}/>} />
          <Route path="/workouts/:id/edit" element={<WorkoutEditForm editId={editId} form={form} handleFormChange={handleFormChange} handleEditForm={handleEditForm}/>} />
          <Route path="/edit" element={<Edit />} />
          </Routes>
      {/* </BrowserRouter> */}
     </div>
  );
}
export default App;
