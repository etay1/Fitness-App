import React from "react";
import { useExerciseForm } from "../../hooks/useExerciseForm";
import { supabase } from "../../supabase/client";
import ExerciseForm from "../Form/ExerciseForm";
import "./AddExercise.css";

function AddExercise({
  isAddExercisePopupOpen,
  closeAddExercisePopup,
  session,
}) {
  console.log("AddExercisepopup");
  console.log(session);
  console.log(session.user.email);
  console.log(session.user.id);

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

          <ExerciseForm
            closeAddExercisePopup={closeAddExercisePopup}
            category={category}
          />

          {isSuccess && (
            <div className="message-add-exercise">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddExercise;
