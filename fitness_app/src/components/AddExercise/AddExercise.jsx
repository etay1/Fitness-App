import React from "react";
import { supabase } from "../../supabase/client";
import ExerciseForm from "../Form/ExerciseForm";
import { useCategoryChange } from "../../hooks/useCategoryChange"; // Import the new hook
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import styles from "./addExercise.module.css";

function AddExercise({ isAddExercisePopupOpen, closeAddExercisePopup }) {
	const [category, handleCategoryChange] = useCategoryChange("strength");

	return (
		<div className={`modal ${isAddExercisePopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div>
						<h1 className='title-form'>Create a New Exercise</h1>

						<CategoryToggle
							category={category}
							handleCategoryChange={handleCategoryChange}
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
