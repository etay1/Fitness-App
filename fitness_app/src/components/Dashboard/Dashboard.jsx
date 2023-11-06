import React from "react";
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { useModalState } from "../../hooks/useModalState";
import "./Dashboard.css";
import { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import UserWeightChart from "../UserWeightChart/UserWeightChart";
import UserCaloriesChart from "../UserCaloriesChart/UserCalories";

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
    

      <div class="dashboard">

        <div class="sidebar"> 
          <Sidebar supabase={supabase} />
        </div>

        <div class="header"> 
          <h1>Welcome {session.user.email} </h1>


        </div>
        <div class="another-item-chart"> 
            <UserCaloriesChart supabase={supabase} session={session}/>
        </div>
        <div class="user-calories-chart"> 
            <UserCaloriesChart supabase={supabase} session={session}/>
        </div>
        <div class="user-weight-chart">
            <UserWeightChart supabase={supabase} session={session}/>
        </div>


{/*         
        <div className="dashboard-content">

          <div className="LineChart">
            <UserWeightChart supabase={supabase} session={session}/>
          </div>

        </div> */}
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
