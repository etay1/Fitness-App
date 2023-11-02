import React from "react";
import { useSubSessionForm } from "../../hooks/useSubSessionForm";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import styles from "./addSubSession.module.css";

function AddSubSession({ isAddSubSessionPopupOpen, closeAddSubSessionPopup }) {
  const {
    category,
    subSessionData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddSubSession,
  } = useSubSessionForm();

  // Once we implement the ExerciseForm here, we can remove the useSubSessionForm hook above
  // and replace it with the hook useCategoryChange
  // since the ExerciseForm itself will call useSubSessionForm
  // we can also remove handleCategoryChange from the useExerciseForm hook!!
  // const [category, handleCategoryChange] = useCategoryChange("strength");
  // See AddExercise for how the code was condensed

  return (
    <div className={`modal ${isAddSubSessionPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="form-ctn">
          <h1 className="title-form">Add A Workout</h1>

          <CategoryToggle
            category={category}
            handleCategoryChange={handleCategoryChange}
          />

          <form>
            <div className="input-ctn">
              <label>Workout:</label>
              <input
                type="text"
                name="sessionName"
                value={subSessionData.sessionName}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-ctn">
              <label>Start Time:</label>
              <input
                type="time"
                name="startTime"
                value={subSessionData.startTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-ctn">
              <label>End Time:</label>
              <input
                type="time"
                name="endTime"
                value={subSessionData.endTime}
                onChange={handleInputChange}
              />
            </div>

            {category === "strength" && (
              <div className="input-ctn">
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
              <div className="input-ctn">
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
              <button className="form-btn" onClick={closeAddSubSessionPopup}>
                Done
              </button>
              <button className="form-btn" onClick={handleAddSubSession}>
                Add Workout
              </button>
            </div>
          </form>

          {isSuccess && <div className="message">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddSubSession;
