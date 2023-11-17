import React from "react";
import { useState } from "react";
import { useExerciseRegistry } from "../../hooks/ExerciseRegistryHooks/useExerciseRegistry";
import { useModalState } from "../../hooks/useModalState";
import DeleteExercise from "../DeleteExercise/DeleteExercise";
import styles from "./ExerciseRegistry.module.css";
import AlterExercise from "../AlterExercise/AlterExercise";

function ExerciseRegistry() {
  const { strengthExercise, cardioExercise, error } = useExerciseRegistry();

  const {
    isOpen: isDeleteExerciseModalOpen,
    openModal: openDeleteExerciseModal,
    closeModal: closeDeleteExerciseModal,
  } = useModalState(false);

  const {
    isOpen: isEditExerciseModalOpen,
    openModal: openEditExerciseModal,
    closeModal: closeEditExerciseModal,
  } = useModalState(false);

  const [exerciseId, setExerciseId] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);
  const [exerciseName, setExerciseName] = useState(null);
  const [exerciseDesc, setExerciseDesc] = useState(null);
  const [exerciseCalories, setExerciseCalories] = useState(null);

  const deleteExercise = (type, id) => {
    setExerciseType(type);
    setExerciseId(id);
    openDeleteExerciseModal(type, id);
  };

  const alterExercise = (type, id, name, desc, calories) => {
    setExerciseType(type);
    setExerciseId(id);
    setExerciseName(name);
    setExerciseDesc(desc);
    setExerciseCalories(calories);
    openEditExerciseModal(type, id, name, desc, calories);
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
                      {strengthExercise.calories_per_rep} calories / rep
                    </div>
                  </div>
                  <div className={styles["exercise-buttons"]}>
                    <button
                      className={styles["edit-button"]}
                      onClick={() =>
                        alterExercise(
                          "strength",
                          strengthExercise.weight_exercise_id,
                          strengthExercise.name,
                          strengthExercise.description,
                          strengthExercise.calories_per_rep
                        )
                      }
                    >
                      Edit
                    </button>
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
                      {cardioExercise.calories_per_unit_duration} calories / 15
                      minutes
                    </div>
                  </div>
                  <div className={styles["exercise-buttons"]}>
                    <button
                      className={styles["edit-button"]}
                      onClick={() =>
                        alterExercise(
                          "cardio",
                          cardioExercise.cardio_exercise_id,
                          cardioExercise.name,
                          cardioExercise.description,
                          cardioExercise.calories_per_unit_duration
                        )
                      }
                    >
                      Edit
                    </button>
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

      <AlterExercise
        isEditExercisePopupOpen={isEditExerciseModalOpen}
        closeEditExercisePopup={closeEditExerciseModal}
        exerciseType={exerciseType}
        category={exerciseType}
        exerciseId={exerciseId}
        exerciseName={exerciseName}
        exerciseDesc={exerciseDesc}
        exerciseCalories={exerciseCalories}
      />
    </div>
  );
}

export default ExerciseRegistry;
