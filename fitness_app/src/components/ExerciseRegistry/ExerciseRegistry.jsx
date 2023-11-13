import React from "react";
import { useState } from "react";
import { useExerciseRegistry } from "../../hooks/ExerciseRegistryHooks/useExerciseRegistry";
import { useModalState } from "../../hooks/useModalState";
import DeleteExercise from "../DeleteExercise/DeleteExercise";
import styles from "./ExerciseRegistry.module.css";

function ExerciseRegistry() {
  const { strengthExercise, cardioExercise, error } = useExerciseRegistry();

  const {
    isOpen: isDeleteExerciseModalOpen,
    openModal: openDeleteExerciseModal,
    closeModal: closeDeleteExerciseModal,
  } = useModalState(false);

  const [exerciseId, setExerciseId] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);

  const deleteExercise = (type, id) => {
    setExerciseType(type);
    setExerciseId(id);
    openDeleteExerciseModal(type, id);
  };

  return (
    <div className={styles["exercise-registry"]}>
      <div className={styles["exercise-registry-header"]}>
        <h1 className={styles["title"]}>Exercise Registry</h1>
      </div>
      <div className={styles["exercise-registry-content"]}>
        {error && (
          <div className={styles["error"]}>Error: {error.toString()}</div>
        )}
        <div className={styles["strength-exercises"]}>
          <h1 className={styles["category-title"]}>Weight Exercises</h1>
          <ul className={styles["exercise-list"]}>
            {strengthExercise.map((strengthExercise) => (
              <li className={styles["exercise-item"]} key={strengthExercise.id}>
                <div className={styles["exercise-details"]}>
                  <div>
                    <div className={styles["exercise-name"]}>
                      {strengthExercise.name}
                    </div>
                    <div className={styles["exercise-description"]}>
                      {strengthExercise.description}
                    </div>
                    <div className={styles["exercise-calories-per_unit"]}>
                      {strengthExercise.calories_per_rep}
                    </div>
                  </div>
                  <div className={styles["exercise-buttons"]}>
                    <button className={styles["edit-button"]}>Edit</button>
                    <button
                      className={styles["delete-button"]}
                      onClick={() =>
                        deleteExercise(
                          "strength",
                          strengthExercise.weight_exercise_id
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["cardio-exercises"]}>
          <h1 className={styles["category-title"]}>Cardio Exercises</h1>
          <ul className={styles["exercise-list"]}>
            {cardioExercise.map((cardioExercise) => (
              <li
                className={styles["exercise-item"]}
                key={cardioExercise.cardio_exercise_id}
              >
                <div className={styles["exercise-details"]}>
                  <div>
                    <div className={styles["exercise-name"]}>
                      {cardioExercise.name}
                    </div>
                    <div className={styles["exercise-description"]}>
                      {cardioExercise.description}
                    </div>
                    <div className={styles["exercise-calories-per_unit"]}>
                      {cardioExercise.calories_per_unit_duration}
                    </div>
                  </div>
                  <div className={styles["exercise-buttons"]}>
                    <button className={styles["edit-button"]}>Edit</button>
                    <button
                      className={styles["delete-button"]}
                      onClick={() =>
                        deleteExercise(
                          "cardio",
                          cardioExercise.cardio_exercise_id
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DeleteExercise
        isDeleteExercisePopupOpen={isDeleteExerciseModalOpen}
        closeDeleteExercisePopup={closeDeleteExerciseModal}
        exerciseType={exerciseType}
        exerciseId={exerciseId}
      />
    </div>
  );
}

export default ExerciseRegistry;
