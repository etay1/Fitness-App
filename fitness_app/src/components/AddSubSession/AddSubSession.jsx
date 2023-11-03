import React from "react";
import { useSubSessionForm } from "../../hooks/forms/SubSession/useSubSessionForm";
import CategoryToggle from "../CategoryToggle/CategoryToggle";
import styles from "./addSubSession.module.css";
import SubSessionForm from "../Form/SubSessionForm";
import { supabase } from "../../supabase/client";

function FlattenList(list) {}

function AddSubSession({ isAddSubSessionPopupOpen, closeAddSubSessionPopup }) {
	const {
		category,
		subSessionData,
		successMessage,
		isSuccess,
		cardioList,
		strengthList,
		handleInputChange,
		handleCategoryChange,
		fetchExerciseData,
		handleAddSubSession,
	} = useSubSessionForm();

	const dropdown = document.getElementById("dropdown");

	// Populate the options using a loop
	// if(category === "strength") {
	//   strengthListNames.forEach(exercise => {
	//       const option = document.createElement("option");
	//       option.value = exercise.weight_exercise_id; // Use the exercise ID as the value
	//       option.text = exercise.name;
	//       dropdown.appendChild(option);
	//   });
	// }

	// if(category === "cardio") {
	//   cardioListNames.forEach(exercise => {
	//       const option = document.createElement("option");
	//       option.value = exercise.cardio_exercise_id; // Use the exercise ID as the value
	//       option.text = exercise.name;
	//       dropdown.appendChild(option);
	//   });
	// }

	return (
		<div className={`modal ${isAddSubSessionPopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div>
						<h1 className='title-form'>Create a new workout</h1>

						<CategoryToggle
							category={category}
							handleCategoryChange={handleCategoryChange}
						/>

						<SubSessionForm
							closeAddSubSessionPopup={closeAddSubSessionPopup}
							category={category}
							supabase={supabase}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddSubSession;
