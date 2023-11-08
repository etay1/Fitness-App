import React from "react";
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { Link } from "react-router-dom";
import { useModalState } from "../../hooks/useModalState";
import styles from "./dashboard.module.css";

const Dashboard = ({ supabase, session }) => {
  const {
    isOpen: isAddExerciseModalOpen,
    openModal: openAddExerciseModal,
    closeModal: closeAddExerciseModal,
  } = useModalState(false);
  const {
    isOpen: isAddUserWeightModalOpen,
    openModal: openAddUserWeightModal,
    closeModal: closeAddUserWeightModal,
  } = useModalState(false);
  const {
    isOpen: isAddSubSessionModalOpen,
    openModal: openAddSubSessionModal,
    closeModal: closeAddSubSessionModal,
  } = useModalState(false);

  const formBtnCss = styles["form-btn"];

  return (
    <div className={styles.dashboard} id="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button className={formBtnCss} onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
      <button className={formBtnCss} onClick={openAddExerciseModal}>
        Add Exercise
      </button>
      <button className={formBtnCss} onClick={openAddSubSessionModal}>
        Add Sub Session
      </button>
      <button className={formBtnCss} onClick={openAddUserWeightModal}>
        Add User Weight
      </button>

      <Link to="/exercise-registry">Exercise Registry</Link>

      <AddExercise
        isAddExercisePopupOpen={isAddExerciseModalOpen}
        closeAddExercisePopup={closeAddExerciseModal}
        session={session}
      />

      <AddSubSession
        isAddSubSessionPopupOpen={isAddSubSessionModalOpen}
        closeAddSubSessionPopup={closeAddSubSessionModal}
        session={session}
      />

      <AddUserWeight
        isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
        closeAddUserWeightPopup={closeAddUserWeightModal}
        session={session}
      />
    </div>
  );
};

export default Dashboard;
