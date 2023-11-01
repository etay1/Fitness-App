import React from "react";
import useUserWeightForm from "../../hooks/useUserWeightForm";
import "./AddUserWeight.css";

function AddUserWeight({
  isAddUserWeightPopupOpen,
  closeAddUserWeightPopup,
  session,
}) {
  const {
    date,
    weight,
    handleDateChange,
    handleWeightChange,
    handleInsertion,
    successMessage,
    isSuccess,
  } = useUserWeightForm(session.user.id);

  return (
    <div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="user-weight-form">
          <h1 className="title-form">Record Weight</h1>
          <form>
            <div className="input-container">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="input-container">
              <label>Weight (in lbs):</label>
              <input
                type="number"
                name="weight"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
          </form>
          <div className="form-btn-ctn">
            <button className="form-btn" onClick={closeAddUserWeightPopup}>
              Cancel
            </button>
            <button
              className="form-btn"
              type="button"
              onClick={handleInsertion}
            >
              Record Weight
            </button>
          </div>

          {isSuccess && <div className="message">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddUserWeight;
