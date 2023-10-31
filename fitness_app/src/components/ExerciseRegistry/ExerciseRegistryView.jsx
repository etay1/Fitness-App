import React from 'react';
import { useExerciseRegistry } from '../../hooks/useExerciseRegistry'; 

function ExerciseRegistryView() {
  const { exercises, error } = useExerciseRegistry();
  console.log(exercises)

  return (
    <div>
      <h1>Exercise Registry</h1>
      {error && <div>Error: {error.toString()}</div>}
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} - {exercise.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseRegistryView;
