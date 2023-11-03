import React from "react";
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { useModalState } from "../../hooks/useModalState";
import styles from "./dashboard.module.css";

const Dashboard = ({ supabase, session }) => {
  const {
    isOpen: isExerciseModalOpen,
    openModal: openExerciseModal,
    closeModal: closeExerciseModal,
  } = useModalState(false);
  const {
    isOpen: isUserWeightModalOpen,
    openModal: openUserWeightModal,
    closeModal: closeWeightModal,
  } = useModalState(false);
  const {
    isOpen: isAddSubSessionModalOpen,
    openModal: openAddSubSessionModal,
    closeModal: closeAddSubSessionModal,
  } = useModalState(false);

  const formBtnCss = `${styles["form-btn"]} form-btn`;

  console.log(styles);
  return (
    // console.log(styles);
    <div className={styles.dashboard} id="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button className={formBtnCss} onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
      <button className={formBtnCss} onClick={openExerciseModal}>
        Add Exercise
      </button>
      <button className={formBtnCss} onClick={openAddSubSessionModal}>
        Add Sub Session
      </button>
      <button className={formBtnCss} onClick={openUserWeightModal}>
        Add User Weight
      </button>

      <AddExercise
        isAddExercisePopupOpen={isExerciseModalOpen}
        closeAddExercisePopup={closeExerciseModal}
        session={session}
      />

      <AddSubSession
        isAddSubSessionPopupOpen={isAddSubSessionModalOpen}
        closeAddSubSessionPopup={closeAddSubSessionModal}
        session={session}
      />

      <AddUserWeight
        isAddUserWeightPopupOpen={isUserWeightModalOpen}
        closeAddUserWeightPopup={closeWeightModal}
        session={session}
      />
    </div>
  );
};

export default Dashboard;
