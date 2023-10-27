import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
export const Dashboard = ({ supabase, session }) => {
  console.log(session);
  console.log(session.user.email);
  console.log(session.user.id);

  const userId = session.user.id;
  console.log(userId);

  return (
    <div className="dashboard">
      <h1>Welcome {session.user.email}</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <Link to="/add-exercise">Add Exercise</Link>
      <Link to="/add-sub-session">Add Sub Session</Link>
      <Link to="/add-user-weight">Add User Weight</Link>
    </div>
  );
};
