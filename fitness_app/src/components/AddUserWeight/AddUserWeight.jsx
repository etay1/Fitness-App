import React from "react";
import useUserWeightForm from "../../hooks/useUserWeightForm";
import WeightForm from "../Form/WeightForm";
import styles from "./addUserWeight.module.css";

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
    isClicked,
  } = useUserWeightForm(session.user.id);

  return (
    <div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
          <WeightForm/>
        </div>
    </div>
  );
}

export default AddUserWeight;
