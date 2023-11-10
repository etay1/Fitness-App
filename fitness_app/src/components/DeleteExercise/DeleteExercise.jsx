import React from "react";
import styles from "./DeleteExercise.module.css";

function DeleteExercise({
  isDeleteExercisePopupOpen,
  closeDeleteExercisePopup,
}) {
  return (
    <div className={`modal ${isDeleteExercisePopupOpen ? "active" : ""}`}>
      <div className="overlay">
        <div className={styles["container"]}>
          <div>
            <h1 className={styles["prompt"]}>Confirm Deletion</h1>
            {/* two buttons */}
            <div className={styles["buttons"]}>
              <button
                className={styles["cancel-button"]}
                onClick={closeDeleteExercisePopup}
              >
                Cancel
              </button>
              <button className={styles["delete-button"]}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteExercise;
