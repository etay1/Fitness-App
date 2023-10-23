import React, { useState} from 'react';
import './AddUserWeight.css';

export const AddUserWeight = () => {

  const date = new Date();
  const currentDate = date.getDate();

  const [userSessionWeight, setUserSessionWeight] = useState({
    sessionWeight: '',
    sessionDate: currentDate, //This is probably incorrectly done
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddWeight = () => {
    setSuccessMessage(
      'Successfully added weight'
    );
    setIsSuccess(true);
    setUserSessionWeight({
      sessionWeight: '',
      sessionDate: currentDate,
    });
  };
  const navigateToMainMenu = () => {
    // Use React Router for navigation to the main menu.
  };

  return (
    <div className='page'>
        <div className='container'>
          <div className='weight-add-form'>
            <h1 className='weight-add-title'> Add a weight </h1>

            <form>
              <div className='input-container'>
                <label>Current Weight:</label>
                <input
                  type="number"
                  name="weight"
                  min="50"
                  max="1000"
                  value={userSessionWeight.weight}
                />

                <div className='form-buttons-add-weight'>
                  <button className='button-add-weight' onClick={navigateToMainMenu}>
                    Exit without saving
                  </button>
                  <button className='button-add-weight' onClick={handleAddWeight}>
                    Save weight and exit
                  </button>
                </div>
                {isSuccess && (
                  <div className='success-message'>
                    {successMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}