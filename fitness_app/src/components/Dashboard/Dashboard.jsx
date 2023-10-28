import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import AddExercise from "../AddExercise/AddExercise";
import { useModalState } from "../../hooks/useModalState";
import AddUserWeight from "../AddUserWeight/AddUserWeight";

const Dashboard = ({ supabase, session }) => {
  const { isOpen: isExerciseModalOpen, openModal: openExerciseModal, closeModal: closeExerciseModal } = useModalState(false);
  const { isOpen: isUserWeightModalOpen, openModal: openUserWeightModal, closeModal: closeWeightModal } = useModalState(false);

  return (
    <div className="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <button onClick={openExerciseModal}>Add Exercise</button>
      <Link to="/add-sub-session">Add Sub Session</Link>
      <button onClick={openUserWeightModal}>Add User Weight</button>

      <AddExercise
        isAddExercisePopupOpen={isExerciseModalOpen}
        closeAddExercisePopup={closeExerciseModal}
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
