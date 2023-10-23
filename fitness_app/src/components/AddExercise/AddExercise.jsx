import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NavigateHome from "../../utils/NavigateHome";
import "./AddExercise.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);

function AddExercise() {
  // State initialization
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

  const [messageColor, styleMessage] = useState("var(--black-color)");

  const validateInput = (name, calories) => {
    if (!name) {
      setSuccessMessage(
        `Invalid field: ${
          !name
            ? "Exercise Name"
            : category === "cardio"
            ? "Calories / 15 minutes"
            : "Calories / rep"
        } is empty.`
      );

      return false;
    }
    setSuccessMessage(
      `Successfully added ${
        category === "cardio" ? "Cardio" : "Strength"
      } Exercise.`
    );
    return true;
  };

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

  const handleInsertion = async (name, description, calories) => {
    try {
      const tableName =
        category === "cardio" ? "cardio_exercise" : "weight_exercise";
      const columnName =
        category === "cardio" ? "calories_per_15" : "calories_per_rep";
      console.log("working");
      const { data, error } = await supabase
        .from(tableName)
        .insert([{ name, description, [columnName]: calories }]);
      
      if (error) {
        throw error;
      }

      setIsSuccess(true);
      setSuccessMessage(
        `Successfully added ${
          category === "cardio" ? "Cardio" : "Strength"
        } Exercise.`
      );

      styleMessage("var(--black-color)");
    } catch (error) {
      setSuccessMessage("Failed to add exercise.");
      styleMessage("red");
      setIsSuccess(true);
      
    }
  };

  const handleAddExercise = () => {
    let name = exerciseData.exerciseName;
    let calories =
      category === "cardio"
        ? exerciseData.caloriesPerDuration
        : exerciseData.caloriesPerRep;
    let description = exerciseData.description;
    const isValid = validateInput(name, calories);

    if (isValid) {
      handleInsertion(name, description, calories);
      setExerciseData({
        exerciseName: "",
        description: "",
        caloriesPerRep: 0,
        caloriesPerDuration: 0,
      });
    }
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
            <div
              id="message-add-exercise"
              className="message-add-exercise"
              style={{ color: messageColor }}
            >
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddExercise;
