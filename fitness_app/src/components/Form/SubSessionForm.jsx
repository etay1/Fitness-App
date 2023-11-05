import React, { useState } from "react";
import EnterKeyHandler from "../Button/EnterKeyHandler";
import Button from "../Button/Button";
function SubSessionForm({
    subSessionData,
    handleInputChange,
    handleAddSubSession,
    closeAddSubSessionPopup,
    category,
    successMessage,
    isSuccess,
}) {
    return (
<EnterKeyHandler onSubmit={handleAddSubSession}>
<form>

  <div className="input-container">
    <label>Workout:</label>
    <input
      type="text"
      name="sessionName"
      value={subSessionData.sessionName}
      onChange={handleInputChange}
    />
  </div>

  <div className="input-container">
    <label>Start Time:</label>
    <input
      type="time"
      name="startTime"
      value={subSessionData.startTime}
      onChange={handleInputChange}
    />
  </div>
  <div className="input-container">
    <label>End Time:</label>
    <input
      type="time"
      name="endTime"
      value={subSessionData.endTime}
      onChange={handleInputChange}
    />
  </div>

  {category === "strength" && (
    <div className="input-container">
      <label>Sets:</label>
      <input
        type="number"
        name="sets"
        min="0"
        value={subSessionData.sets}
        onChange={handleInputChange}
      />
    </div>
  )}

  {category === "strength" && (
    <div className="input-container">
      <label>Reps per Set:</label>
      <input
        type="number"
        name="repsPerSet"
        min="0"
        value={subSessionData.repsPerSet}
        onChange={handleInputChange}
      />
    </div>
  )}  

<div className="form-btn-ctn">
    <Button text = "Done" onClick={closeAddSubSessionPopup}></Button>
    <Button text = "Add Workout" onClick={handleAddSubSession}></Button>
</div>
{isSuccess && <div className="message">{successMessage}</div>}
</form>
</EnterKeyHandler>
    );
}
export default SubSessionForm;