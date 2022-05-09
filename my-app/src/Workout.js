import React from "react";
import './App.css';

function Workout({work}) {
    const {workout, category, details, date, calories} = work
  return (
      <div>
          <h3>{workout}</h3>
          <p>Category: {category}</p>
          {/* <select>
              <option>Cardio</option>
              <option>Weights</option>
              <option>Sports</option>
          </select> */}
          <p>Details: {details}</p>
          <p>Calories burned: {calories}</p>
          <p>Date completed: {date}</p>
      </div>
  );
}

export default Workout;
