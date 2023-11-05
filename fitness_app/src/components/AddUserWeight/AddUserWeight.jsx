import React from "react";
import useUserWeightForm from "../../hooks/useUserWeightForm";
import Button from "../Button/Button";
import EnterKeyHandler from "../Button/EnterKeyHandler";
import styles from "./addUserWeight.module.css";
import UserWeightForm from "../Form/UserWeightForm";

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
          <EnterKeyHandler onSubmit={handleInsertion} >
          <UserWeightForm
            date={date}
            weight={weight}
            handleDateChange={handleDateChange}
            handleWeightChange={handleWeightChange}
            handleInsertion={handleInsertion} />
          </EnterKeyHandler>
          

          <div className="form-btn-ctn">
            <Button text="Done" onClick={closeAddUserWeightPopup}></Button>
            <Button text="Record Weight" onClick={handleInsertion}></Button>  
          </div>
          {isSuccess && <div className="message">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddUserWeight;
