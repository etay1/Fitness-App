import React from "react";
import { useExerciseForm } from "../../hooks/useExerciseForm";
import { supabase } from "../../supabase/client";
import "./AddExercise.css";
function AddExercise({ isAddExercisePopupOpen, closeAddExercisePopup, session }) {
  console.log("AddExercisepopup")
  console.log(session)
  console.log(session.user.email)
  console.log(session.user.id)
    
  const {
    category,
    exerciseData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddExercise,
  } = useExerciseForm(supabase);

  return (
    <div className={`modal ${isAddExercisePopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="exercise-form">
          <h1 className="title-form">Create a New Exercise</h1>
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

          <div className="form-btn-ctn">
            <button
              className="form-btn"
              onClick={closeAddExercisePopup}
            >
              Done
            </button>
            <button
              className="form-btn"
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
