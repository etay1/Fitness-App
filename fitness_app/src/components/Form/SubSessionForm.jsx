import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSubSessionForm } from "../../hooks/useSubSessionForm";
import useSubSessionValidationSchema from "../../hooks/useSubSessionValidationSchema";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";

const initialFormValues = {
	exerciseName: "",
	exercise_id: 0,
	startTime: "",
	endTime: "",
	sets: "0",
	repsPerSet: "0",
};

const SubSessionForm = ({ closeAddSubSessionPopup, category, supabase }) => {
	const { successMessage, updateSuccessMessage } = useSuccessMessage();

	const { isSuccess, exerciseList, handleInsertion } = useSubSessionForm(
		supabase,
		category,
		updateSuccessMessage
	);

	const { validationSchema, key } = useSubSessionValidationSchema(
		category,
		updateSuccessMessage
	);

	return (
		<Formik
			key={key}
			initialValues={initialFormValues}
			validationSchema={validationSchema}
			enableReinitialize={true}
			onSubmit={(values, formik) => {
				handleInsertion(values);
				if (isSuccess) {
					formik.resetForm();
				}
			}}
		>
			{(formik) => {
				const { errors, touched, isValid, dirty } = formik;
				return (
					<Form>
						<div className={styles["form-ctn"]}>
							<div className={styles["input-ctn"]}>
								<label>Exercise Name: </label>
								<Field
									as='select'
									name='exerciseName'
									id='exerciseName'
									className={
										errors.exerciseName && touched.exerciseName
											? styles["input-error"]
											: null
									}
									// This onChange gets the ID from the exerciseList
									// and assigns that id to exericse_id
									onChange={(e) => {
										const selectedExerciseName = e.target.value;
										const selectedExercise = exerciseList.find(
											(exercise) => exercise.name === selectedExerciseName
										);
										const selectedExerciseId = selectedExercise
											? selectedExercise.cardio_exercise_id ||
											  selectedExercise.weight_exercise_id
											: "";
										formik.setFieldValue("exerciseName", selectedExerciseName);
										formik.setFieldValue("exercise_id", selectedExerciseId);
									}}
								>
									<option value=''>-- Select --</option>
									{exerciseList.map((exercise, index) => {
										return (
											<option key={index} value={exercise.name}>
												{exercise.name}
											</option>
										);
									})}
								</Field>

								<ErrorMessage
									name='exerciseName'
									component='span'
									className={styles.error}
								/>
							</div>
							<div className={styles["input-ctn"]}>
								<label>Start Time: </label>
								<Field
									type='time'
									name='startTime'
									id='startTime'
									className={
										errors.startTime && touched.startTime
											? styles["input-error"]
											: null
									}
								/>
								<ErrorMessage
									name='startTime'
									component='span'
									className={styles.error}
								/>
							</div>
							<div className={styles["input-ctn"]}>
								<label>End Time: </label>
								<Field
									type='time'
									name='endTime'
									id='endTime'
									className={
										errors.endTime && touched.endTime
											? styles["input-error"]
											: null
									}
								/>
								<ErrorMessage
									name='endTime'
									component='span'
									className={styles.error}
								/>
							</div>
							{category === "strength" && (
								<div className={styles["input-ctn"]}>
									<label>Sets: </label>
									<Field
										type='number'
										min='0'
										name='sets'
										id='sets'
										className={
											errors.sets && touched.sets ? styles["input-error"] : null
										}
									/>
									<ErrorMessage
										name='sets'
										component='span'
										className={styles.error}
									/>
								</div>
							)}
							{category === "strength" && (
								<div className={styles["input-ctn"]}>
									<label>Reps per Set: </label>
									<Field
										type='number'
										min='0'
										name='repsPerSet'
										id='repsPerSet'
										className={
											errors.repsPerSet && touched.repsPerSet
												? styles["input-error"]
												: null
										}
									/>
									<ErrorMessage
										name='repsPerSet'
										component='span'
										className={styles.error}
									/>
								</div>
							)}
							<div className={styles["form-btn-ctn"]}>
								<button
									className={styles["form-btn"]}
									type='button'
									onClick={() => {
										updateSuccessMessage("");
										formik.resetForm();
										closeAddSubSessionPopup();
									}}
								>
									Done
								</button>
								<button
									type='submit'
									className={`${styles["form-btn"]} ${
										!(dirty && isValid) ? styles["disabled-btn"] : ""
									}`}
									disabled={!(dirty && isValid)}
								>
									Add Workout
								</button>
							</div>
							<div className={styles["form-success-ctn"]}>
								<div className={styles["form-success-message"]}>
									{successMessage}
								</div>
							</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};
export default SubSessionForm;
