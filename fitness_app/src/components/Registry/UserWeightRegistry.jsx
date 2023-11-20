import React, { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import { supabase } from "../../supabase/client";
import styles from "./Registry.module.css";
import { useModalState } from "../../hooks/useModalState";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import { useUserWeightRegistry } from "../../hooks/UserWeightFormHooks/useUserWeightRegistry";

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
				<Sidebar supabase={supabase} />
			</div>

			<div className='content'>
				<div className={styles["registry-content"]}>
					<div className={styles["registry-header"]}>
						<h1 className={styles["registry-title"]}>User Weight Registry</h1>
						<div>
							<button
								className={styles["add-button"]}
								onClick={() => openAddUserWeightModal()}
							>
								Add User Weight
							</button>
						</div>
					</div>
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
												{new Date(userWeight.date).toLocaleDateString("en-US")}
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
			{/* 
      <AddUserWeight
        isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
        closeAddUserWeightPopup={closeAddUserWeightModal}
  
      /> */}
		</div>
	);
}

export default UserWeightRegistry;
