import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <input type="date" name="date" />
            
            <input type="text" name="workout" placeholder="Workout"/>
            
            <select>
                <option value="Cardio">Cardio</option>
                <option value="Weights">Weights</option>
                <option value="Sports">Sports</option>
            </select>

            <input type="number" name="calories" placeholder="Calories"/>
            <input type="Details" name="Details" placeholder="Details"/>

        </form>
    </div>
  )
}

export default Form