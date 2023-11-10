import React from "react";
import { useExerciseRegistry } from "../../hooks/useExerciseRegistry";
import styles from "./ExerciseRegistry.module.css";

function ExerciseRegistry() {
  const { strengthExercise, cardioExercise, error } = useExerciseRegistry();

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
          <h1 className={styles["category-title"]}> Weight Exercises</h1>
          <ul className={styles["exercise-list"]}>
            {strengthExercise.map((strengthExercise) => (
              <li className={styles["exercise-item"]} key={strengthExercise.id}>
                <div className={styles["exercise-name"]}>
                  {strengthExercise.name}
                </div>
                <div className={styles["exercise-description"]}>
                  {strengthExercise.description}
                </div>
                <div className={styles["exercise-calories-per_unit"]}>
                  {strengthExercise.calories_per_rep}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["cardio-exercises"]}>
          <h1 className={styles["category-title"]}>Cardio Exercises</h1>
          <ul className={styles["exercise-list"]}>
            {cardioExercise.map((cardioExercise) => (
              <li className={styles["exercise-item"]} key={cardioExercise.id}>
                <div className={styles["exercise-name"]}>
                  {cardioExercise.name}
                </div>
                <div className={styles["exercise-description"]}>
                  {cardioExercise.description}
                </div>
                <div className={styles["exercise-calories-per_unit"]}>
                  {cardioExercise.calories_per_unit_duration}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExerciseRegistry;
