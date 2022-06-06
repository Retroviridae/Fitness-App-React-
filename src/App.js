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
  const [workoutArr, setWorkoutArr] =useState([
      {
        "workout": "Chest",
        "category": "Weights",
        "details": "3 reps of benches",
        "date": "2022-05-09",
        "calories": "60",
        "id": 6
      },
      {
        "workout": "Running",
        "category": "Cardio",
        "details": "Had a nice midday run.",
        "date": "2022-05-09",
        "calories": "200",
        "id": 7
      },
      {
        "workout": "Abs",
        "category": "Body Weight",
        "details": "40 crunches, 40 leg raises, and 20 burpees",
        "date": "2022-05-02",
        "calories": "150",
        "id": 8
      },
      {
        "workout": "Biceps",
        "category": "Weights",
        "details": "4 sets of curls, 3 sets of pullups",
        "date": "2022-04-28",
        "calories": "110",
        "id": 9
      },
      {
        "workout": "Football",
        "category": "Sports",
        "details": "Tackled somebody",
        "date": "2022-05-13",
        "calories": "255",
        "id": 10
      },
      {
        "workout": "Jumprope",
        "category": "Cardio",
        "details": "Jump roped for 30 minutes",
        "date": "2022-05-11",
        "calories": "220",
        "id": 11
      },
      {
        "workout": "Pushups",
        "category": "Body Weight",
        "details": "75 pushups total for the day",
        "date": "2022-03-31",
        "calories": "120",
        "id": 12
      },
      {
        "workout": "Football",
        "category": "Sports",
        "details": "Tackled somebody",
        "date": "2022-05-03",
        "calories": "360",
        "id": 13
      },
    ]
  )
  const [editId, setEditId] = useState()
  const [homeEdit, setHomeEdit] = useState({
    weight: '235lbs',
    primary: 'Be promoted to CEO',
    secondary: 'Marry Angela'
  })
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
  },[])
  
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
  })} 

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
  //takes in id from edit button to route
  function handleEditId(id) {
    setEditId(id)
  }

  //takes in id from workout to filter
  function deleteInfo(id){
    const filteredWorkouts = workoutArr.filter(workout => workout.id !== id)
    setWorkoutArr(filteredWorkouts)
  }
  

  function handleHomeEdit(data) {
    setHomeEdit(data)
  }

  return (
     <div>
      {/* <BrowserRouter> */}
        <Header />
          <Routes>
            <Route path="/" element={<Home homeEdit={homeEdit}/>} />
            <Route path="/new" element={<WorkoutForm form={form} handleFormChange={handleFormChange} handleSubmit={handleSubmit}/>} />
            <Route path="/workouts" element={<WorkoutList workouts={workoutArr} deleteInfo={deleteInfo} handleEditId={handleEditId}/>} />
            <Route path="/workouts/:id/edit" element={<WorkoutEditForm editId={editId} form={form} handleFormChange={handleFormChange} handleEditForm={handleEditForm}/>} />
            <Route path="/edit" element={<Edit handleHomeEdit={handleHomeEdit}/>} />
          </Routes>
      {/* </BrowserRouter> */}
     </div>
  );
}
export default App;
