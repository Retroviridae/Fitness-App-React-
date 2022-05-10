import Header from './Header';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import WorkoutEditForm from './WorkoutEditForm';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Edit from './Edit';


function App() {
  // const history = useHistory();
  const [workoutArr, setWorkoutArr] =useState([])
  const [editId, setEditId] = useState()
  const [form,setForm]=useState({
    workout:"",
    category:"",
    details:"",
    date:"",
    calories:""
  })
  const [goals,setGoals]= useState({
    weight:"200",
    primary:"Get stronger",
    secondary:"Fight the guy from the price is right"
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
    
  })} 

  function handleEditForm (e) {
    e.preventDefault()
    fetch(`http://localhost:3000/workouts/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    }).then(res => res.json())
      .then(data => setWorkoutArr(workoutArr.filter(workout => {
        if (workout.id === data.id){
          return data
        }else return false
      })))
  }

  function handleEditId(id) {
    setEditId(id)
  }

  //takes in id from workout to filter
  function deleteInfo(id){
    const filteredWorkouts = workoutArr.filter(workout => workout.id !== id)
    setWorkoutArr(filteredWorkouts)
  }
  function handleEdit(e){
    setGoals({...goals,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home goals={goals} handleEdit={handleEdit}/>
        </Route>
        <Route path="/new">
          <WorkoutForm form={form} handleFormChange={handleFormChange} handleSubmit={handleSubmit}/>
        </Route>
        <Route path="/workouts/:id/edit">
          <WorkoutEditForm editId={editId} form={form} handleFormChange={handleFormChange} handleEditForm={handleEditForm}/>
        </Route>
        <Route path="/workouts">
          <WorkoutList workouts={workoutArr} deleteInfo={deleteInfo} handleEditId={handleEditId}/>
        </Route>
        <Route path="/edit">
          <Edit goals={goals} handleEdit={handleEdit}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;