import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSubSessionForm } from "../../hooks/SubSessionFormHooks/useSubSessionForm";
import useSubSessionValidationSchema from "../../hooks/SubSessionFormHooks/useSubSessionValidationSchema";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";
import Button from "../Button/Button";

const initialFormValues = {
	exerciseName: "",
	exercise_id: 0,
	startTime: "",
	endTime: "",
	sets: "0",
	repsPerSet: "0",
};

const SubSessionForm = ({ closeAddSubSessionPopup, category }) => {
	const { successMessage, updateSuccessMessage } = useSuccessMessage();

	const {
		isSuccess,
		exerciseList,
		subSessionValues,
		handleInsertion,
		saveValues,
	} = useSubSessionForm(category, updateSuccessMessage);

	const { validationSchema, key } = useSubSessionValidationSchema(
		category,
		updateSuccessMessage
	);

	// useEffect to log changes in subSessionValues
	useEffect(() => {
		console.log("subSessionValues changed:", subSessionValues);
	}, [subSessionValues]);
	return (
		<Formik
			key={key}
			initialValues={initialFormValues}
			validationSchema={validationSchema}
			enableReinitialize={true}
			// onSubmit={handleSubmit}
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
									className={`${styles["select-input"]} ${
										errors.exerciseName && touched.exerciseName
											? styles["input-error"]
											: ""
									}`}
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
								<Button
									text='Done'
									type='button'
									onClick={() => {
										updateSuccessMessage("");
										formik.resetForm();
										closeAddSubSessionPopup();
									}}
								></Button>
								<Button
									text='Add Workout'
									type='button'
									className={` ${
										!(dirty && isValid) ? styles["disabled-btn"] : ""
									}`}
									disabled={!(dirty && isValid)}
									onClick={() => {
										saveValues(formik.values);
										handleInsertion(subSessionValues);
										console.log("saved values: ", subSessionValues);

										closeAddSubSessionPopup();
									}}
								></Button>
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
