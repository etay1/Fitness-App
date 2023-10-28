import React from "react";
import { useAddSubSession } from "../../hooks/useAddSubSession";
import "./AddSubSession.css";

function AddSubSession({
  isAddSubSessionPopupOpen,
  closeAddSubSessionPopup
}) {
  const {
    category,
    subSessionData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddSubSession,
  } = useAddSubSession();

  return (
    <div className={`modal ${isAddSubSessionPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="form-ctn">
          <h1 className="title-form">Add A Workout</h1>
          <div className="category-toggle">
            <button
              className={`category-button ${
                category === "strength" ? "active" : "inactive"
              }`}
              onClick={() => handleCategoryChange("strength")}
            >
              Strength
            </button>
            <button
              className={`category-button ${
                category === "cardio" ? "active" : "inactive"
              }`}
              onClick={() => handleCategoryChange("cardio")}
            >
              Cardio
            </button>
          </div>

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
                  value={subSessionData.repsPerSet}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </form>

          <div className="form-btn-ctn">
            <button className="form-btn" onClick={closeAddSubSessionPopup}>Done</button>
            <button className="form-btn" onClick={handleAddSubSession}>
              Add {category === "cardio" ? "Cardio" : "Strength"} Subsession
            </button>
          </div>

          {isSuccess && <div className="message">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddSubSession;
