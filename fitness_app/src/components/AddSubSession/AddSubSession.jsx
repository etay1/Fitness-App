import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './AddSubSession.css'; // Create a CSS file for this component

function AddSubSession() {
  // State initialization
  const [subSessionData, setSubSessionData] = useState({
    sessionName: '',
    description: '',
    category: 'strength', //default
    exercises: [], 
    startTime: '',
    endTime: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Event handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubSessionData({ ...subSessionData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setSubSessionData({ ...subSessionData, category: newCategory });
  };

  const navigateToMainMenu = () => {
    // Navigate to the main menu page.
    // You can use React Router as well here.
  };

  const handleAddSubSession = () => {
    // Code to send the subsession data to the server will go here.
    setSuccessMessage(`Successfully added ${subSessionData.category === 'cardio' ? 'Cardio' : 'Strength'} Subsession.`);
    setIsSuccess(true);
    setSubSessionData({
      sessionName: '',
      description: '',
      category: 'cardio',
      exercises: [],
      startTime: '',
      endTime: '',
    });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="subsession-form">
          <h1 className="title-add-subsession">Add A Workout</h1>
          <div className="category-toggle">
            <button
              className={`category-button ${subSessionData.category === 'strength' ? 'active' : 'inactive'}`}
              onClick={() => handleCategoryChange('strength')}
            >
              Strength
            </button>
            <button
              className={`category-button ${subSessionData.category === 'cardio' ? 'active' : 'inactive'}`}
              onClick={() => handleCategoryChange('cardio')}
            >
              Cardio
            </button>
          </div>

          {/* Form */}
          <form>
            <div className="input-container">
              <label>Subsession Name:</label>
              <input
                type="text"
                name="sessionName"
                value={subSessionData.sessionName}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-container">
              <label>Description:</label>
              <textarea
                name="description"
                value={subSessionData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-container">
                <label>Start Time:</label>
                <input
                    type="time"
                    name="startTime"
                    value={subSessionData.startTime}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-container">
                <label>End Time:</label>
                <input
                    type="time"
                    name="endTime"
                    value={subSessionData.endTime}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-buttons-add-subsession">
                <button className="button-add-subsession" onClick={navigateToMainMenu}>
                Done
                </button>
                <button className="button-add-subsession" type="button" onClick={handleAddSubSession}>
                Add {subSessionData.category === 'cardio' ? 'Cardio' : 'Strength'} Subsession
                </button>
            </div>
          </form>


          {isSuccess && (
            <div className="message-add-subsession">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddSubSession;
