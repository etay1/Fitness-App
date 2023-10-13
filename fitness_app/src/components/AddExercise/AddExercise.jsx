import React from 'react'

const AddExercise = () => {
  return (
    <div className='page'>
        <div className='container'>

          {/* THIS IS THE BLUEPRINT FOR ADDING AN EXERCISE
              THE LEFT BOX AND RIGHT BOX WILL BE ADDING A 
              CARDIO OR STRENGTH EXERCISE*/}

            {/* left box */}
            <div className='box left-box'>
              <p>left box</p>
              </div>

            {/* right box */}
            <div className='box right-box'>
              <p>right box</p>
            </div>

        </div>

    </div>
  )
}

export default AddExercise