import React from "react";
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { useModalState } from "../../hooks/useModalState";
import "./Dashboard.css";
import { useEffect } from "react";

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
       {/* <div class="sidebar">
          <div class="menu-btn">
            <i class="ph-bold ph-caret-left"></i>
          </div>
          <div class="head">
            <div class="user-img">
              <img src="user.jpg" alt="" />
            </div>
            <div class="user-details">
              <p class="title">web developer</p>
              <p class="name">John Doe</p>
            </div>
          </div>
          <div class="nav">
            <div class="menu">
              <p class="title">Main</p>
              <ul>
                <li>
                  <a href="#">
                    <i class="icon ph-bold ph-house-simple"></i>
                    <span class="text">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon ph-bold ph-user"></i>
                    <span class="text">Features</span>
                    <i class="arrow ph-bold ph-caret-down"></i>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#">
                        <span class="text">Post</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="text">Calendar</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="active">
                  <a href="#">
                    <i class="icon ph-bold ph-file-text"></i>
                    <span class="text">Charts</span>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={openExerciseModal}>
                    <i class="icon ph-bold ph-calendar-blank"></i>
                    <span class="text">Add Exercise</span>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={openAddSubSessionModal}>
                    <i class="icon ph-bold ph-chart-bar"></i>
                    <span class="text">Add Subsession</span>
                    <i class="arrow ph-bold ph-caret-down"></i>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#" onClick={openUserWeightModal}>
                        <span class="text">Add User Weight</span>
                      </a>
                    </li>     
                  </ul>
                </li>
              </ul>
            </div>
            <div class="menu">
              <p class="title">Settings</p>
              <ul>
                <li>
                  <a href="#">
                    <i class="icon ph-bold ph-gear"></i>
                    <span class="text">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu">
            <p class="title">Account</p>
            <ul>
              <li>
                <a href="#">
                  <i class="icon ph-bold ph-info"></i>
                  <span class="text">Help</span>
                </a>
              </li>
              <li>
              <a href="#" onClick={() => supabase.auth.signOut()}>
                <i className="icon ph-bold ph-sign-out"></i>
                <span className="text">Sign Out</span>
              </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="credits">
          <h1>
          {session.user.email}
          </h1>
        </div> */}
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
  );
};

export default Dashboard;
