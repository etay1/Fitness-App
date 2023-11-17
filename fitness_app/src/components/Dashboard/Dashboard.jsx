import React from "react";
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { Link } from "react-router-dom";
import { useModalState } from "../../hooks/useModalState";
import styles from "./dashboard.module.css";
import { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import UserCaloriesChart from "../UserCaloriesChart/UserCaloriesChart";
import Header from "../Header/Header";
import UserPerformanceChart from "../UserPerformanceChart/UserPerformanceChart";

const Dashboard = ({ supabase, session }) => {

  return (
    
    <div className="page">
      <div className={styles.dashboard}>
        
        <div className={styles.sidebarContainer}>
          <Sidebar supabase={supabase} session={session}/>
        </div>

        
          <div className={styles.widgetsContainer}>

            <div className={styles.topContainer}>
              <div className={styles.topChart}>
                <UserCaloriesChart supabase={supabase} session={session}/>
              </div>
              <div className={styles.topChart}>
                <UserCaloriesChart supabase={supabase} session={session}/>
              </div>
              <div className={styles.topChart}>
                <UserCaloriesChart supabase={supabase} session={session}/>
              </div>
            </div>

            <div className={styles.bottomContainer}>

              <div className={styles.bottomChart}>
                <UserPerformanceChart supabase={supabase} session={session}/>
              </div>
                    
            </div>

          </div>
      </div>
      </div>
      
    
    
  );
};
{/* <h1>Welcome {session.user.email} </h1>
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
/> */}
export default Dashboard;
