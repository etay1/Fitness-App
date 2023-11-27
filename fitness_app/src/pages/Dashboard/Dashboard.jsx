import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "../../components/SideBar/SideBar";
import UserPerformanceChart from "../../components/charts/UserPerformanceChart";
import UserAnotherChart from "../../components/charts/UserAnotherChart";

const Dashboard = () => {
	return (
			<div className={styles.dashboard}>
				<div className="sidebar-container">
					<Sidebar />
				</div>
				

				<div className={styles.widgetsContainer}>
					<div className={styles.topContainer}>
					</div>

					<div className={styles.bottomContainer}>
						<div className={styles.bottomChart}>
							<UserPerformanceChart />
						</div>
						<div className={styles.bottomChart}>
							<UserAnotherChart />
						</div>
					</div>
				</div>
			</div>
	);
};
{
	/* <h1>Welcome {session.user.email} </h1>
<button className="form-btn" onClick={() => supabase.auth.signOut()}>Sign Out</button>
<button className="form-btn" onClick={openExerciseModal}>Add Exercise</button>
<button className="form-btn" onClick={openAddSubSessionModal}>Add Sub Session</button>
<button className="form-btn" onClick={openUserWeightModal}>Add User Weight</button>
<AddExercise
  isAddExercisePopupOpen={isExerciseModalOpen}
  closeAddExercisePopup={closeExerciseModal}

/>

<AddSubSession
  isAddSubSessionPopupOpen={isAddSubSessionModalOpen}
  closeAddSubSessionPopup={closeAddSubSessionModal}

/>

<AddUserWeight
  isAddUserWeightPopupOpen={isUserWeightModalOpen}
  closeAddUserWeightPopup={closeWeightModal}
/> */
}
export default Dashboard;
