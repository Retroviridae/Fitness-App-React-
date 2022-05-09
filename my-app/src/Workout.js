import React from "react";
import './App.css';

function Workout({work}) {
    const {workout, category, details, date, calories} = work
  return (
      <div>
          <header>{workout}</header>
          <p>{category}</p>
          {/* <select>
              <option>Cardio</option>
              <option>Weights</option>
              <option>Sports</option>
          </select> */}
          <p>{details}</p>
          <p>{calories}</p>
          <p>{date}</p>
      </div>
  );
}

export default Workout;
