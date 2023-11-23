// ConfirmDeletion.js
import React from "react";
import styles from "./ConfirmDeletion.module.css";
import useExerciseDeletion from "../../../hooks/ExerciseRegistryHooks/useExerciseDeletion";

function ConfirmDeletion({
  isOpen,
  onClose,
  onConfirm,
  promptText,
  exerciseType,
  exerciseId,
}) {
  const { confirmDeletion } = useExerciseDeletion();

  onConfirm = () => {
    console.log("Confirm deletion");
    confirmDeletion(exerciseType, exerciseId, onClose);
  };
  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
      <div className="overlay">
        <div className={styles["container"]}>
          <div>
            <h1 className={styles["prompt"]}>{promptText}</h1>
            <div className={styles["buttons"]}>
              <button className={styles["cancel-button"]} onClick={onClose}>
                Cancel
              </button>
              <button className={styles["delete-button"]} onClick={onConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeletion;
