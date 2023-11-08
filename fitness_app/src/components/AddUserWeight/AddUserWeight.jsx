import React from "react";
import useUserWeightForm from "../../hooks/UserWeightFormHooks/useUserWeightForm";
import styles from "./addUserWeight.module.css";
import UserWeightForm from "../Form/UserWeightForm";

function AddUserWeight({
  isAddUserWeightPopupOpen,
  closeAddUserWeightPopup,
  session,
}) {
  // const {
  //   date,
  //   weight,
  //   handleDateChange,
  //   handleWeightChange,
  //   handleInsertion,
  //   successMessage,
  //   isSuccess,
  // } = useUserWeightForm(session.user.id);

  return (
    <div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="form-ctn">
          <h1 className="title-form">Create a New Exercise</h1>
          <UserWeightForm
            closeAddUserWeightPopup={closeAddUserWeightPopup}
            session={session}
          />
        </div>
      </div>
    </div>
  );
}

export default AddUserWeight;
