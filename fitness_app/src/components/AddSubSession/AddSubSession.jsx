import React, { useState } from "react";
import "./AddSubSession.css";
import NavigateHome from "../../utils/NavigateHome";

function AddSubSession() {
  const [category, setCategory] = useState("strength");
  const [subSessionData, setSubSessionData] = useState({
    sessionName: "",
    exercises: [],
    startTime: "",
    endTime: "",
    sets: 0,
    repsPerSet: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleNavigate = NavigateHome();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubSessionData({ ...subSessionData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    // Erase error message
    setIsSuccess(false);
  };

  const handleAddSubSession = () => {
    // Code to send the subsession data to the server goes here.
    setSuccessMessage(
      `Successfully added ${
        category === "cardio" ? "Cardio" : "Strength"
      } Subsession.`
    );
    setIsSuccess(true);
    setSubSessionData({
      sessionName: "",
      exercises: [],
      startTime: "",
      endTime: "",
      sets: 0,
      repsPerSet: 0,
    });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="subsession-form">
          <h1 className="title-add-subsession">Add A Workout</h1>
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

            <div className="input-container time-subsession">
              <label>Start Time:</label>
              <input
                type="time"
                name="startTime"
                value={subSessionData.startTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-container time-subsession">
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

          <div className="form-buttons-add-subsession">
            <button className="button-add-subsession" onClick={handleNavigate}>
              Done
            </button>
            <button
              className="button-add-subsession"
              onClick={handleAddSubSession}
            >
              Add {category === "cardio" ? "Cardio" : "Strength"} Subsession
            </button>
          </div>

          {isSuccess && (
            <div className="message-add-subsession">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddSubSession;
