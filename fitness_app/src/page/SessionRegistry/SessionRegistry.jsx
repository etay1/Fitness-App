import React from "react";
import styles from "../../components/ExerciseRegistry/ExerciseRegistry.module.css";
import RegistryHeader from "../../components/ExerciseRegistry/RegistryHeader";
import { useModalState } from "../../hooks/useModalState";
import { useAuthStateListener } from "../../supabase/session";
import AddExercise from "../../components/AddExercise/AddExercise";

const SessionRegistry = () => {
    const session = useAuthStateListener();
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
				session={session}
			/>
		</div>
	);
};

export default SessionRegistry;
