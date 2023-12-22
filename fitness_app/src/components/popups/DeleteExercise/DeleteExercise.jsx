import React from "react";
import styles from "./DeleteExercise.module.css";
import useExerciseDeletion from "../../../hooks/ExerciseRegistryHooks/useExerciseDeletion";
import Button from "../../Button/Button";

function DeleteExercise({
	isDeleteExercisePopupOpen,
	closeDeleteExercisePopup,
	exerciseType,
	exerciseId,
}) {
	const { confirmDeletion } = useExerciseDeletion();

	return (
		<div className={`modal ${isDeleteExercisePopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className={styles["container"]}>
					<div>
						<h1 className={styles["prompt"]}>Confirm Deletion</h1>
						<div className={styles["buttons"]}>
							<button
								className={styles["cancel-button"]}
								onClick={closeDeleteExercisePopup}
							>
								Cancel
							</button>
							<button
								className={styles["delete-button"]}
								onClick={() =>
									confirmDeletion(
										exerciseType,
										exerciseId,
										closeDeleteExercisePopup
									)
								}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteExercise;
