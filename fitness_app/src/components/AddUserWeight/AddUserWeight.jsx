import React from "react";
import { supabase } from "../../supabase/client"
import useUserWeightForm from "../../hooks/useUserWeightForm";
import WeightForm from "../Form/WeightForm";
import styles from "./addUserWeight.module.css";

function AddUserWeight({
  isAddUserWeightPopupOpen,
  closeAddUserWeightPopup,
  session
}) {
  const { date, weight, successMessage, isClicked, isSuccess } = useUserWeightForm(session.user.id);

  return (
    <div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
          <WeightForm
            closeAddUserWeightPopup={closeAddUserWeightPopup}
            supabase={supabase}
            session={session}
          />
        </div>
    </div>
  );
}

export default AddUserWeight;
