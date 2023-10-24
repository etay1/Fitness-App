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
  const [showMessage, setshowMessage] = useState(false);
  const handleNavigate = NavigateHome();

  const [messageColor, styleMessage] = useState("var(--black-color)");

  const validateInput = (name, calories) => {
    // if (!name || calories < 1) {

    if (!name || calories < 1) {
      const errorMessages = [];

      if (!name) {
        errorMessages.push("Exercise Name is empty");
      }

      if (calories < 1) {
        errorMessages.push(
          category === "cardio"
            ? "Calories / 15 minutes must be greater than 0"
            : "Calories / rep must be greater than 0"
        );
      }

      const errorMessageList = (
        <ul>
          {errorMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      );

      console.log(errorMessageList);

      setSuccessMessage(
        <div>
          <p>Invalid field(s):</p>
          {errorMessageList}
        </div>
      );

      setshowMessage(true);
      styleMessage("red");
      return false;
    }

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
    setshowMessage(false);
  };

  const handleInsertion = async (name, description, calories) => {
    try {
      const tableName =
        category === "cardio" ? "cardio_exercise" : "weight_exercise";
      const columnName =
        category === "cardio" ? "calories_per_15" : "calories_per_rep";
      const { data, error } = await supabase
        .from(tableName)
        .insert([{ name, description, [columnName]: calories }]);

      if (error) throw error;

      setshowMessage(true);
      setSuccessMessage(
        `Successfully added ${
          category === "cardio" ? "Cardio" : "Strength"
        } Exercise.`
      );

      setExerciseData({
        exerciseName: "",
        description: "",
        caloriesPerRep: 0,
        caloriesPerDuration: 0,
      });

      //not sure if this should be black to stand out or blue to match rest of page
      styleMessage("var(--black-color)");
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        setSuccessMessage("Exercise already exists.");
        styleMessage("red");
        setshowMessage(true);
      } else {
        console.log(error);
        setSuccessMessage("Failed to add exercise.");
        styleMessage("red");
        setshowMessage(true);
      }
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

          {showMessage && (
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
