import React from "react";
import AlterExerciseForm from "../../forms/AlterExerciseForm";
import styles from "../Popups.module.css";

const AlterExercise = ({
  isEditExercisePopupOpen,
  closeEditExercisePopup,
  exerciseType,
  exerciseId,
  exerciseName,
  exerciseDesc,
  exerciseCalories,
}) => {
  return (
    <div className={`modal ${isEditExercisePopupOpen ? "active" : ""}`}>
      <div className="overlay">
        <div className="container">
          <div>
            <h1 className={styles["title-form"]}>Edit Exercise</h1>
            <AlterExerciseForm
              isEditExercisePopupOpen={isEditExercisePopupOpen}
              closeEditExercisePopup={closeEditExercisePopup}
              exerciseType={exerciseType}
              exerciseId={exerciseId}
              exerciseName={exerciseName}
              exerciseDesc={exerciseDesc}
              exerciseCalories={exerciseCalories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterExercise;
