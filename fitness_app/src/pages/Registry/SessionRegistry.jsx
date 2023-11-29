import React from "react";
import styles from "./styles/Registry.module.css";
import RegistryHeader from "./components/Header";
import { useModalState } from "../../hooks/useModalState";
import AddSession from "../../components/popups/AddSession/AddSession";

const SessionRegistry = () => {
	const {
		isOpen: isAddSessionModalOpen,
		openModal: openAddSessionModal,
		closeModal: closeAddSessionModal,
	} = useModalState(false);

	return (
		<div className='page'>
			<div className='sidebar-container'></div>
			<div className='content'>
				<div className={styles["exercise-registry"]}>
					<RegistryHeader
						page_title='Session Registry'
						button_name='Add Session +'
						onClickFunc={openAddSessionModal}
					/>
				</div>
			</div>
			<AddSession
				isAddSessionPopupOpen={isAddSessionModalOpen}
				closeAddSessionPopup={closeAddSessionModal}
			/>
		</div>
	);
};

export default SessionRegistry;
