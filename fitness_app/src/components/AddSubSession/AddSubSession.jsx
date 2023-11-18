import React from "react";
import { supabase } from "../../supabase/client";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import SubSessionForm from "../Form/SubSessionForm";
import styles from "../Form/form.module.css";
import { useCategory } from "../../hooks/useCategory";

function AddSubSession({ isAddSubSessionPopupOpen, closeAddSubSessionPopup }) {
  const { category, changeCategory } = useCategory("strength");
  return (
    <div className={`modal ${isAddSubSessionPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div>
          <h1 className={styles["title-form"]}>Add A Workout</h1>

          <CategoryToggle category={category} changeCategory={changeCategory} />
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

