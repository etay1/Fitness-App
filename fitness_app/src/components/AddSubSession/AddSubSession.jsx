import React from "react";
import { useSubSessionForm } from "../../hooks/useSubSessionForm";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import EnterKeyHandler from "../Button/EnterKeyHandler";
import styles from "./addSubSession.module.css";
import SubSessionForm from "../Form/SubSessionForm";

function AddSubSession({ isAddSubSessionPopupOpen, closeAddSubSessionPopup }) {
  const {
    category,
    subSessionData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddSubSession,
  } = useSubSessionForm();

  // Once we implement the ExerciseForm here, we can remove the useSubSessionForm hook above
  // and replace it with the hook useCategoryChange
  // since the ExerciseForm itself will call useSubSessionForm
  // we can also remove handleCategoryChange from the useExerciseForm hook!!
  // const [category, handleCategoryChange] = useCategoryChange("strength");
  // See AddExercise for how the code was condensed

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
            subSessionData={subSessionData}
            handleInputChange={handleInputChange}
            handleAddSubSession={handleAddSubSession}
            closeAddSubSessionPopup={closeAddSubSessionPopup}
            category={category}
          />
              {isSuccess && <div className="message">{successMessage}</div>}
          </div>
       </div>
      </div>
  );
}

export default AddSubSession;
