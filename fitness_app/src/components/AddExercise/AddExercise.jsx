import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NavigateHome from "../../utils/NavigateHome";
import "./AddExercise.css";
import { useLocation } from "react-router-dom";

function AddExercise() {
  // State initialization
  const location = useLocation();

  // Parse the query parameters from the location's search property
  const queryParams = new URLSearchParams(location.search);

  // Get the value of the "sessionVariable" query parameter
  const sessionVariable = queryParams.get("sessionVariable");

  console.log(sessionVariable);

  const [category, setCategory] = useState("strength");
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    description: "",
    caloriesPerRep: 0,
    caloriesPerDuration: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleNavigate = NavigateHome();

  // Event handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    // erase error message
    setIsSuccess(false);
  };

  // Function to navigate to the main menu

  // const navigateToMainMenu = () => {
  //   const path = '/'; // Adjust the path as needed
  //   navigate(path);

  // };

  const handleAddExercise = () => {
    // Code to send the exercise data to the server will go here.
    setSuccessMessage(
      `Successfully added ${
        category === "cardio" ? "Cardio" : "Strength"
      } Exercise.`
    );
    setIsSuccess(true);
    setExerciseData({
      exerciseName: "",
      description: "",
      caloriesPerRep: 0,
      caloriesPerDuration: 0,
    });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="exercise-form">
          <h1 className="title-add-exercise">Create a New Exercise</h1>
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

          {/* Form */}
          <form>
            <div className="input-container">
              <label>Exercise Name:</label>
              <input
                type="text"
                name="exerciseName"
                value={exerciseData.exerciseName}
                onChange={handleInputChange}
              />
            </div>

            {category === "strength" && (
              <div className="input-container">
                <label>Calories / rep:</label>
                <input
                  type="number"
                  name="caloriesPerRep"
                  value={exerciseData.caloriesPerRep}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {category === "cardio" && (
              <div className="input-container">
                <label>Calories / 15 minutes:</label>
                <input
                  type="number"
                  name="caloriesPerDuration"
                  value={exerciseData.caloriesPerDuration}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="input-container">
              <label>Description:</label>
              <textarea
                name="description"
                value={exerciseData.description}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <div className="form-buttons-add-exercise">
            <button className="button-add-exercise" onClick={handleNavigate}>
              Done
            </button>
            <button
              className="button-add-exercise"
              type="button"
              onClick={handleAddExercise}
            >
              Add {category === "cardio" ? "Cardio" : "Strength"} Exercise
            </button>
          </div>

          {isSuccess && (
            <div className="message-add-exercise">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddExercise;
