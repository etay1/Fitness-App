import React, { useState } from 'react';
import './AddSubSession.css';
import { Navigate } from 'react-router-dom';

function AddSubSession() {
  const [category, setCategory] = useState('strength');
  const [subSessionData, setSubSessionData] = useState({
    sessionName: '',
    category: '',
    exercises: [],
    startTime: '',
    endTime: '',
    sets: 0,
    repsPerSet: 0,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {


  };

  const handleToggleChange = () => {
    const newCategory = category === 'strength' ? 'cardio' : 'strength';
    setSubSessionData({ ...subSessionData, category: newCategory });
    setCategory(newCategory);
    setIsSuccess(false);
  };
  
  const handleCategoryChange = (newCategory) => {
    setSubSessionData({ ...subSessionData, category: newCategory });
    // erase error message
    setIsSuccess(false);
  };

  const handleAddSubSession = () => {
    // Code to send the subsession data to the server goes here.
    setSuccessMessage(
      `Successfully added ${subSessionData.category === 'cardio' ? 'Cardio' : 'Strength'} Subsession.`
    );
    setIsSuccess(true);
    setSubSessionData({
      sessionName: '',
      category: subSessionData.category,
      exercises: [],
      startTime: '',
      endTime: '',
      sets: 0,
      repsPerSet: 0,
    });
  };

  const navigateToMainMenu = () => {
    // Use React Router for navigation to the main menu.
  };

  return (
    <div className="page">
      <div className="container">
        <div className="subsession-form">
          <h1 className="title-add-subsession">Add A Workout</h1>
          <div className="category-toggle">
            <div className="toggle-container">
                <label className={`toggle-label left-label ${category === 'strength' ? 'active' : 'inactive'}`}>Strength</label>
                <input
                    type="checkbox"
                    className={`toggle-switch ${category === 'cardio' ? 'active' : 'inactive'}`}
                    onChange={handleToggleChange}
                />
                <label className={`toggle-label right-label ${category === 'cardio' ? 'active' : 'inactive'}`}>Cardio</label>
                </div>
          </div>

          <form>
            <div className="input-container">
              <label>Workout:</label>
              <input
                type="text"
                name="sessionName"
                value={subSessionData.sessionName}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-container time-subsession">
              <label>Start Time:</label>
              <input
                type="time"
                name="startTime"
                value={subSessionData.startTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-container time-subsession">
              <label>End Time:</label>
              <input
                type="time"
                name="endTime"
                value={subSessionData.endTime}
                onChange={handleInputChange}
              />
            </div>

            {subSessionData.category === 'strength' && (
              <div className="input-container">
                <label>Sets:</label>
                <input
                  type="number"
                  name="sets"
                  value={subSessionData.sets}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {subSessionData.category === 'strength' && (
              <div className="input-container">
                <label>Reps per Set:</label>
                <input
                  type="number"
                  name="repsPerSet"
                  value={subSessionData.repsPerSet}
                  onChange={handleInputChange}
                />
              </div>
            )}

          </form>

          <div className="form-buttons-add-subsession">
            <button className="button-add-subsession" onClick={navigateToMainMenu}>
              Done
            </button>
            <button className="button-add-subsession" onClick={handleAddSubSession}>
              Add {subSessionData.category === 'cardio' ? 'Cardio' : 'Strength'} Subsession
            </button>
          </div>

          {isSuccess && (
            <div className="message-add-subsession">{successMessage}</div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AddSubSession;

