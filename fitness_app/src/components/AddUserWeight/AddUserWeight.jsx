import React from 'react';
import './AddUserWeight.css';

export const AddUserWeight = () => {
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
                  //TODO: add value along the lines of value={foo.bar}
                />
              </div>
            </form>
            <p>Add user weight boiler plate</p>
          </div>
        </div>
    </div>
  )
}
