import React from "react";
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { useModalState } from "../../hooks/useModalState";
import "./Dashboard.css";
import { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";

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

  return (
    

    <div className="dashboard">

        <div className="sidebar">
          <Sidebar supabase={supabase} />
        </div>
        <div className="dashboard-content">
          <h1>Welcome {session.user.email} </h1>
          <button className="form-btn" onClick={() => supabase.auth.signOut()}>Sign Out</button>
          <button className="form-btn" onClick={openExerciseModal}>Add Exercise</button>
          <button className="form-btn" onClick={openAddSubSessionModal}>Add Sub Session</button>
          <button className="form-btn" onClick={openUserWeightModal}>Add User Weight</button>
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
    </div>


    
    
  );
};

export default Dashboard;
