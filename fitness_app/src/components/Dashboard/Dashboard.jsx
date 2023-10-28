import React from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/client";
import "./Dashboard.css";
import AddExercise from "../AddExercise/AddExercise";
import "../AddExercise/AddExercise.css";
import { useModalState } from "../../hooks/useModalState"; // Import your custom hook

const Dashboard = ({ supabase, session }) => {
  const { isOpen, openModal, closeModal } = useModalState(false);

  return (
    <div className="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <button onClick={openModal}>Add Exercise</button>
      <Link to="/add-sub-session">Add Sub Session</Link>
      <Link to="/add-user-weight">Add User Weight</Link>

      <AddExercise
        isAddExercisePopupOpen={isOpen}
        closeAddExercisePopup={closeModal}
        session={session}
      />
    </div>
  );
};

export default Dashboard;
