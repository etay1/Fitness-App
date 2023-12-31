import React from "react";
import ExerciseForm from "../../forms/ExerciseForm";
import CategoryToggle from "../../CategoryToggle/CategoryToggle";
import { useCategory } from "../../../hooks/useCategory";
import styles from "../Popups.module.css";

function AddExercise({ isAddExercisePopupOpen, closeAddExercisePopup }) {
	const { category, changeCategory } = useCategory("strength");

	return (
		<div className={`modal ${isAddExercisePopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div>
						<h1 className={styles["title-form"]}>Create a New Exercise</h1>

						<CategoryToggle
							category={category}
							changeCategory={changeCategory}
						/>

						<ExerciseForm
							closeAddExercisePopup={closeAddExercisePopup}
							category={category}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddExercise;
