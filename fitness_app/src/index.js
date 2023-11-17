import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "./supabase/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddSubSession from "./components/AddSubSession/AddSubSession";
import AddExercise from "./components/AddExercise/AddExercise";
import AddUserWeight from "./components/AddUserWeight/AddUserWeight";
import ExerciseRegistry from "./components/ExerciseRegistry/ExerciseRegistry";
import SessionRegistry from "./page/SessionRegistry/SessionRegistry";
import "./index.css";
import PrivateRoute from "./utils/PrivateRoute";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App supabase={supabase} />} />
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/add-exercise" element={<AddExercise />} />
        </Route>
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/add-sub-session" exact element={<AddSubSession />} />
        </Route>
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/add-user-weight" element={<AddUserWeight />} />
        </Route>
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/exercise-registry" element={<ExerciseRegistry />} />
        </Route>
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/session-registry" element={<SessionRegistry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
