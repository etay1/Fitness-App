import React from "react";
import styles from "./AlterExercise.module.css";
import AlterExerciseForm from "../Form/AlterExerciseForm";

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
