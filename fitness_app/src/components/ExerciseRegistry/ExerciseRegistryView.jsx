import React from "react";
import { useExerciseRegistry } from "../../hooks/useExerciseRegistry";
import "./ExerciseRegistryView.css";

function ExerciseRegistryView() {
  const { exercises, error } = useExerciseRegistry();

  return (
    <div className="exercise-registry">
      <div className="exercise-registry-header">
        <h1 className="title">Exercise Registry</h1>
      </div>
      <div className="exercise-registry-content">
        {error && <div className="error">Error: {error.toString()}</div>}
        <ul className="exercise-list">
          {exercises.map((exercise) => (
            <li className="exercise-item" key={exercise.id}>
              <div className="exercise-name">{exercise.name}</div>
              <div className="exercise-description">{exercise.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExerciseRegistryView;
