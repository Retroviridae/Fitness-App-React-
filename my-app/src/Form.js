import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <input type="date" name="date"/>
            
            <input type="text" name="workout"/>
            <select>
                <option value="Cardio">Cardio</option>
                <option value="Weights">Weights</option>
                <option value="Sports">Sports</option>
            </select>
        </form>
    </div>
  )
}

export default Form