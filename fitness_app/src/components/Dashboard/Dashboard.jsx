import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "../SideBar/SideBar";
import UserCaloriesChart from "../UserCaloriesChart/UserCaloriesChart";
import UserPerformanceChart from "../UserPerformanceChart/UserPerformanceChart";
import UserAnotherChart from "../UserAnotherChart/UserAnotherChart";

const Dashboard = ({ supabase }) => {
	return (
		<div className='page'>
			<div className={styles.dashboard}>
				<div className={styles.sidebarContainer}>
					<Sidebar supabase={supabase} />
				</div>

				<div className={styles.widgetsContainer}>
					<div className={styles.topContainer}>
						<div className={styles.topChart}>
							<UserCaloriesChart supabase={supabase} />
						</div>
						<div className={styles.topChart}>
							<UserCaloriesChart supabase={supabase} />
						</div>
						<div className={styles.topChart}>
							<UserCaloriesChart supabase={supabase} />
						</div>
					</div>

					<div className={styles.bottomContainer}>
						<div className={styles.bottomChart}>
							<UserPerformanceChart supabase={supabase} />
							<UserAnotherChart />
						</div>
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
