import React from "react";
import { supabase } from "../../supabase/client";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import SubSessionForm from "../Form/SubSessionForm";
import { useCategoryChange } from "../../hooks/useCategoryChange";
import styles from "./addSubSession.module.css";

function AddSubSession({ isAddSubSessionPopupOpen, closeAddSubSessionPopup }) {
  const [category, handleCategoryChange] = useCategoryChange("strength");
  return (
    <div className={`modal ${isAddSubSessionPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="form-ctn">
          <h1 className="title-form">Add A Workout</h1>

          <CategoryToggle
            category={category}
            handleCategoryChange={handleCategoryChange}
          />
          <SubSessionForm
            closeAddSubSessionPopup={closeAddSubSessionPopup}
            category={category}
            supabase={supabase}
          />
        </div>
      </div>
    </div>
  );
}

export default AddSubSession;
