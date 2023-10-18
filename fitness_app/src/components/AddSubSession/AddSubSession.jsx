import React, { useState } from 'react';

export const AddSubSession = () => {
  const [isCardioActive, setCardioActive] = useState(true);
  const [isTransitioning, setTransitioning] = useState(false);

  const toggleComponent = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCardioActive(!isCardioActive);
      setTransitioning(false);
    }, 500); // Adjust the timeout based on your transition duration
  };

  const customStyles = `
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #2c2c2c; 
    color: #ffffff; 
  }

  .container {
    text-align: center;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Toggle switch styles */
  .toggle-switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px; 
    margin-bottom: 20px;
  }

  .toggle-switch label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #00cc44;
  }

  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: relative;
    cursor: pointer;
    width: 60px;
    height: 34px;
    background-color: #00cc44; 
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #2c2c2c; 
    transition: .4s;
    border-radius: 50%;
    position: absolute;
  }

  input:checked + .slider {
    background-color: #00cc44; 
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .workout-component {
      display: none;
      width: 600px; 
      margin: 0 auto; 
      background-color: #2c2c2c; 
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      margin-top: 20px;
      position: relative; 
    }
  
    .workout-component.active {
      display: block;
    }
  
    /* Styles for the workout components */
    .cardio, .weight, .flexibility {
      border-radius: 10px;
      background-color: #2c2c2c; 
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      position: relative; 
    }
  
    /* Header styles */
    h2 {
      color: #00cc44; 
    }
  
    /* Done button styles */
    .done-button {
      background-color: #00cc44;
      color: #ffffff; 
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      position: absolute;
      bottom: 20px;
      right: 20px;
      opacity: 0;
      transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
    }
  
    .done-button:hover,
    .done-button:active {
      transform: scale(1.1);
    }
  
    .workout-component.active .done-button {
      opacity: 1;
    }
  
    /* Weight component fields */
    .weight-fields, .cardio-fields {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  
    .weight-fields span, .cardio-fields span {
      margin: 10px;
      color: #00cc44; 
      font-weight: bold;
    }
    
    .workout-component,
    .cardio-fields,
    .weight-fields {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }

    .workout-component.active,
    .cardio-fields.active,
    .weight-fields.active {
      opacity: 1;
    }
  `;

  return (
    <div style={{ position: 'relative' }}>
      <style>{customStyles}</style>
      <div className="container">
        <div className={`toggle-switch ${isTransitioning ? 'transitioning' : ''}`}>
          <label>
            <span>Weight</span>
            <input
              type="checkbox"
              id="toggleSwitch"
              onChange={toggleComponent}
              checked={!isCardioActive}
            />
            <span className="slider"></span>
            <span>Cardio</span>
          </label>
        </div>

        <div id="cardio" className={`workout-component cardio ${isCardioActive ? 'active' : ''}`}>
          <h2>Cardio</h2>
          <div className={`cardio-fields ${isTransitioning ? 'active' : ''}`}>
            <span>Cardio Exercise</span>
            <span>Start Time</span>
            <span>End Time</span>
          </div>
          <button className="done-button">Done</button>
        </div>

        <div id="weight" className={`workout-component weight ${!isCardioActive ? 'active' : ''}`}>
          <h2>Weight</h2>
          <div className={`weight-fields ${isTransitioning ? 'active' : ''}`}>
            <span>Weight Exercise</span>
            <span>Sets</span>
            <span>Reps/Set</span>
            <span>Start Time</span>
            <span>End Time</span>
          </div>
          <button className="done-button">Done</button>
        </div>
      </div>
    </div>
  );
};
