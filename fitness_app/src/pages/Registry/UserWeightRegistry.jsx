import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import { useModalState } from "../../hooks/useModalState";
import AddUserWeight from "../../components/popups/AddUserWeight/AddUserWeight";
import { useUserWeightRegistry } from "../../hooks/UserWeightFormHooks/useUserWeightRegistry";
import styles from "./styles/Registry.module.css";

function UserWeightRegistry() {
	const {
		isOpen: isAddUserWeightModalOpen,
		openModal: openAddUserWeightModal,
		closeModal: closeAddUserWeightModal,
	} = useModalState(false);

	const { userWeights, error } = useUserWeightRegistry();

	return (
		<div className='page'>
			<div className='sidebar-container'>
				<Sidebar />
			</div>
			<div className='content'>
				<div className={styles["registry-content"]}>
					<div className={styles["registry-header"]}>
						<h1 className={styles["registry-title"]}>User Weight Registry</h1>
					</div>
					<div>
						<button
							className={styles["add-button"]}
							onClick={() => openAddUserWeightModal()}
						>
							Add User Weight
						</button>
					</div>
					<div>
						{error && (
							<div className={styles["error"]}>Error: {error.toString()}</div>
						)}
						<div className={styles["registry-data"]}>
							<h1 className={styles["category-title"]}>Weight Exercises</h1>
							<ul className={styles["list"]}>
								{userWeights.map((userWeight) => (
									<li className={styles["item"]} key={userWeight.id}>
										<div className={styles["item-details"]}>
											<div>
												<div className={styles["item-name"]}>
													{userWeight.date}
												</div>
												<div className={styles["item-description"]}>
													{userWeight.weight} pounds
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<AddUserWeight
					isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
					closeAddUserWeightPopup={closeAddUserWeightModal}
				/>
			</div>
		</div>
	);
}

export default UserWeightRegistry;
