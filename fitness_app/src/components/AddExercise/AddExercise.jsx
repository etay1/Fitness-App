import React, { useState } from 'react';
import './AddExercise.css';

function AddExercise() {
  // State initialization
  const [category, setCategory] = useState('cardio');
  const [exerciseData, setExerciseData] = useState({
    exerciseName: '',
    description: '',
    caloriesPerRep: 0,
    caloriesPerDuration: 0,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Event handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const navigateToMainMenu = () => {
    window.location.href = '/';
    // You can use React Router as well here.
  };

  const handleAddExercise = () => {
    // Code to send the exercise data to the server will go here.
    setSuccessMessage(`Successfully added ${category === 'cardio' ? 'Cardio' : 'Strength'} Exercise.`);
    setIsSuccess(true);
    setExerciseData({
      exerciseName: '',
      description: '',
      caloriesPerRep: 0,
      caloriesPerDuration: 0,
    });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="exercise-form">
          <div className="category-toggle">
            <button
              className={`category-button ${category === 'cardio' ? 'active' : 'inactive'}`}
              onClick={() => handleCategoryChange('cardio')}
            >
              Cardio
            </button>
            <button
              className={`category-button ${category === 'strength' ? 'active' : 'inactive'}`}
              onClick={() => handleCategoryChange('strength')}
            >
              Strength
            </button>
          </div>

          {/* Form */}
          <form>
            <div>
              <label>Exercise Name:</label>
              <input
                type="text"
                name="exerciseName"
                value={exerciseData.exerciseName}
                onChange={handleInputChange}
              />
            </div>

            {category === 'strength' && (
              <div>
                <label>Calories/15 minutes:</label>
                <input
                  type="number"
                  name="caloriesPerRep"
                  value={exerciseData.caloriesPerRep}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {category === 'cardio' && (
              <div>
                <label>Calories per Duration:</label>
                <input
                  type="number"
                  name="caloriesPerDuration"
                  value={exerciseData.caloriesPerDuration}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={exerciseData.description}
                onChange={handleInputChange}
              />
            </div>

            <button className="button-add-exercise" type="button" onClick={handleAddExercise}>
              Add {category === 'cardio' ? 'Cardio' : 'Strength'} Exercise
            </button>

            <button className="button-add-exercise" onClick={navigateToMainMenu}>
              Main Menu
            </button>

            {isSuccess && (
              <div className="success-message">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddExercise;
