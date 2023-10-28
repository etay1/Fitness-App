// Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/client";
import "./Dashboard.css";
import AddExercise from "../AddExercise/AddExercise";
import "../AddExercise/AddExercise.css";

const Dashboard = ({ supabase, session }) => {
  const [isAddExercisePopupOpen, setIsAddExercisePopupOpen] = useState(false);

  const openAddExercisePopup = () => {
    console.log("openAddExercisePopup");
    setIsAddExercisePopupOpen(true);
  };

  const closeAddExercisePopup = () => {
    console.log("closeAddExercisePopup");
    setIsAddExercisePopupOpen(false);
  };

  return (
    <div className="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <button onClick={openAddExercisePopup}>Add Exercise</button>
      <Link to="/add-sub-session">Add Sub Session</Link>
      <Link to="/add-user-weight">Add User Weight</Link>

      <AddExercise
        isAddExercisePopupOpen={isAddExercisePopupOpen}
        closeAddExercisePopup={closeAddExercisePopup}
        session={session}
      />
    </div>
  );
};

export default Dashboard;
