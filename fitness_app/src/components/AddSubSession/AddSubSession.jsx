import React from "react";
import "./AddSubSession.css";
import { useAddSubSession } from "../../hooks/useAddSubSession";
import { Link } from "react-router-dom";

function AddSubSession() {
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
    <div className="page">
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
            <Link to="/">
              <button className="form-btn">Done</button>
            </Link>
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
