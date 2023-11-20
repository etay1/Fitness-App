import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useExerciseRegistry } from "../../hooks/ExerciseRegistryHooks/useExerciseRegistry";
import { useModalState } from "../../hooks/useModalState";
import DeleteExercise from "../DeleteExercise/DeleteExercise";
import AddExercise from "../AddExercise/AddExercise";
import AlterExercise from "../AlterExercise/AlterExercise";
import styles from "./Registry.module.css";
import { useAuthStateListener } from "../../supabase/session";
import Sidebar from "../SideBar/SideBar";
import { supabase } from "../../supabase/client";

function ExerciseRegistry() {
  const { strengthExercise, cardioExercise, error } = useExerciseRegistry();
  const session = useAuthStateListener();

  const {
    isOpen: isAddExerciseModalOpen,
    openModal: openAddExerciseModal,
    closeModal: closeAddExerciseModal,
  } = useModalState(false);

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
    <div className="page">
      <div className="sidebar-container">
        <Sidebar supabase={supabase} session={session} />
      </div>
      <div className="content">
        <div className={styles["registry-content"]}>
          <div className={styles["registry-header"]}>
            <h1 className={styles["registry-title"]}>Exercise Registry</h1>
          </div>
          <div>
            <button
              className={styles["add-button"]}
              onClick={() => openAddExerciseModal()}
            >
              Add Exercise
            </button>
          </div>
          <div>
            {error && (
              <div className={styles["error"]}>Error: {error.toString()}</div>
            )}
            <div className={styles["registry-data"]}>
              <h1 className={styles["category-title"]}>Weight Exercises</h1>
              <ul className={styles["list"]}>
                {strengthExercise.map((strengthExercise) => (
                  <li className={styles["item"]} key={strengthExercise.id}>
                    <div className={styles["item-details"]}>
                      <div>
                        <div className={styles["item-name"]}>
                          {strengthExercise.name}
                        </div>
                        <div className={styles["item-description"]}>
                          {strengthExercise.description}
                        </div>
                        <div className={styles["exercise-calories-per_unit"]}>
                          {strengthExercise.calories_per_rep} calories / rep
                        </div>
                      </div>
                      <div className={styles["button-ctn"]}>
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
            <div className={styles["registry-data"]}>
              <h1 className={styles["category-title"]}>Cardio Exercises</h1>
              <ul className={styles["list"]}>
                {cardioExercise.map((cardioExercise) => (
                  <li
                    className={styles["item"]}
                    key={cardioExercise.cardio_exercise_id}
                  >
                    <div className={styles["item-details"]}>
                      <div>
                        <div className={styles["item-name"]}>
                          {cardioExercise.name}
                        </div>
                        <div className={styles["item-description"]}>
                          {cardioExercise.description}
                        </div>
                        <div className={styles["exercise-calories-per_unit"]}>
                          {cardioExercise.calories_per_unit_duration} calories /
                          15 minutes
                        </div>
                      </div>
                      <div className={styles["button-ctn"]}>
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
        </div>
      </div>
      <DeleteExercise
        isDeleteExercisePopupOpen={isDeleteExerciseModalOpen}
        closeDeleteExercisePopup={closeDeleteExerciseModal}
        exerciseType={exerciseType}
        exerciseId={exerciseId}
      />
      <AddExercise
        isAddExercisePopupOpen={isAddExerciseModalOpen}
        closeAddExercisePopup={closeAddExerciseModal}
        session={session}
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