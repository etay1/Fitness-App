import React from "react";
import { supabase } from "../../supabase/client";
import ExerciseForm from "../Form/ExerciseForm";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import { useCategory } from "../../hooks/useCategory";
import styles from "./addExercise.module.css";

function AddExercise({ isAddExercisePopupOpen, closeAddExercisePopup }) {
	const { category, changeCategory } = useCategory("strength");

	return (
		<div className={`modal ${isAddExercisePopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div className='form-ctn'>
						<h1 className='title-form'>Create a New Exercise</h1>

						<CategoryToggle
							category={category}
							Add A Workout
							
							changeCategory={changeCategory}
						/>

						<ExerciseForm
							closeAddExercisePopup={closeAddExercisePopup}
							category={category}
							supabase={supabase}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddExercise;
