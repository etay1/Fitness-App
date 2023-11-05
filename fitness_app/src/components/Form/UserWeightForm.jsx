import React from "react";

function UserWeightForm ({date, weight, handleDateChange, handleWeightChange}){
    return(
        <form>
        <div className="input-container">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="input-container">
          <label>Weight (in lbs):</label>
          <input
            type="number"
            name="weight"
            min="0"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
      </form>  
    )
}
export default UserWeightForm;