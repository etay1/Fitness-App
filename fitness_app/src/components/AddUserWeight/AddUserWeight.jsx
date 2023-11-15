import React from "react";
import useUserWeightForm from "../../hooks/UserWeightFormHooks/useUserWeightForm";
import styles from "../Form/form.module.css";
import UserWeightForm from "../Form/UserWeightForm";

function AddUserWeight({
  isAddUserWeightPopupOpen,
  closeAddUserWeightPopup,
  session,
}) {
  return (
    <div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div>
          <h1 className={styles["title-form"]}>Record Weight</h1>
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
