import React from "react";
import styles from "./styles/Registry.module.css";
import RegistryHeader from "./components/Header";
import { useModalState } from "../../hooks/useModalState";
import AddExercise from "../../components/popups/AddExercise/AddExercise";

const SessionRegistry = () => {
	const {
		isOpen: isAddSubSessionModalOpen,
		openModal: openAddSubSessionModal,
		closeModal: closeAddSubSessionModal,
	} = useModalState(false);
	const {
		isOpen: isAddExerciseModalOpen,
		openModal: openAddExerciseModal,
		closeModal: closeAddExerciseModal,
	} = useModalState(false);

	return (
		<div className='page'>
			<div className='sidebar-container'></div>
			<div className='content'>
				<div className={styles["exercise-registry"]}>
					<RegistryHeader
						page_title='Session Registry'
						button_name='Add Session +'
						onClickFunc={openAddExerciseModal}
					/>

					
				</div>
			</div>
			<AddExercise
				isAddExercisePopupOpen={isAddExerciseModalOpen}
				closeAddExercisePopup={closeAddExerciseModal}
			/>
		</div>
	);
};

export default SessionRegistry;
