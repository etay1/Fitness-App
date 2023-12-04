import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "../../components/SideBar/SideBar";
import UserPerformanceChart from "../../components/charts/UserPerformanceChart";
import UserAnotherChart from "../../components/charts/UserAnotherChart";
import UserWeightSessionDisplay from "../../components/widgets/UserWeightSessionDisplay";
import UserCardioSessionDisplay from "../../components/widgets/UserCardioSessionDisplay";
import UserWeightDisplay from "../../components/widgets/UserWeightDisplay";

const Dashboard = () => {
	return (
		<div className='page'>
			<div className='sidebarContainer'>
				<Sidebar />
			</div>

			<div className='content'>
				<div className={styles.widgetsContainer}>
					<div className={styles.topContainer}>
						<div className={styles.topChart}>
							<UserWeightSessionDisplay />
						</div>
						<div className={styles.topChart}>
							<UserCardioSessionDisplay />
						</div>
						<div className={styles.topChart}>
							<UserWeightDisplay />
						</div>
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
		</div>
	);
};

export default Dashboard;
