import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/SideBar";
import UserCaloriesChart from "../UserCaloriesChart/UserCaloriesChart";
import Header from "../Header/Header";
import UserPerformanceChart from "../UserPerformanceChart/UserPerformanceChart";
import { useModalState } from "../../hooks/useModalState";
import styles from "./Dashboard.module.css";

const Dashboard = ({ supabase, session }) => {
  const [isChecked, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(false);
  }, []);

  const handleChange = (event) => {
    setCheckedState(!isChecked);
    // Handle onChange logic if needed
  };

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
      <div className={styles.dashboard}>

          <div className={styles.sidebarContainer}>
            <Sidebar />
          </div>

        <div className={styles.widgetsContainer}>
          <div className={styles.topContainer}>
            <div className={styles.topChart}>
              <UserCaloriesChart supabase={supabase} session={session} />
            </div>
            <div className={styles.topChart}>
              <UserCaloriesChart supabase={supabase} session={session} />
            </div>
            <div className={styles.topChart}>
              <UserCaloriesChart supabase={supabase} session={session} />
            </div>
          </div>

          <div className={styles.bottomContainer}>
            <div className={styles.bottomChart}>
              <UserPerformanceChart supabase={supabase} session={session} />
            </div>
            
          </div>
        
        </div>
      </div>
  );
};

export default Dashboard;
