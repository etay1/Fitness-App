import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useExerciseValidationSchema from "../../hooks/ExerciseFormHooks/useExerciseValidationSchema";
import { useExerciseForm } from "../../hooks/ExerciseFormHooks/useExerciseForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";
import Button from "../Button/Button";

const initialFormValues = {
	exerciseName: "",
	caloriesPerRep: 0,
	caloriesPerDuration: 0,
	description: "",
};

const ExerciseForm = ({ closeAddExercisePopup, category }) => {
	const { successMessage, updateSuccessMessage } = useSuccessMessage();

	const { isSuccess, handleInsertion } = useExerciseForm(
		category,
		updateSuccessMessage
	);

	const { validationSchema, key } = useExerciseValidationSchema(
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
								<label>Exercise Name:</label>
								<Field
									type='text'
									name='exerciseName'
									id='exerciseName'
									className={
										errors.exerciseName && touched.exerciseName
											? styles["input-error"]
											: null
									}
								/>
								<ErrorMessage
									name='exerciseName'
									component='span'
									className={styles.error}
								/>
							</div>
							{category === "strength" && (
								<div className={styles["input-ctn"]}>
									<label>Calories / rep:</label>
									<Field
										type='number'
										min='0'
										name='caloriesPerRep'
										id='caloriesPerRep'
										className={
											errors.caloriesPerRep && touched.caloriesPerRep
												? styles["input-error"]
												: null
										}
									/>
									<ErrorMessage
										name='caloriesPerRep'
										component='span'
										className={styles.error}
									/>
								</div>
							)}
							{category === "cardio" && (
								<div className={styles["input-ctn"]}>
									<label>Calories / 15 minutes:</label>
									<Field
										type='number'
										min='0'
										name='caloriesPerDuration'
										id='caloriesPerDuration'
										className={
											errors.caloriesPerDuration && touched.caloriesPerDuration
												? styles["input-error"]
												: null
										}
									/>
									<ErrorMessage
										name='caloriesPerDuration'
										component='span'
										className={styles.error}
									/>
								</div>
							)}
							<div className={styles["input-ctn"]}>
								<label>Description:</label>
								<Field
									as='textarea'
									name='description'
									id='description'
									className={
										errors.description && touched.description
											? styles["input-error"]
											: null
									}
								/>
								<ErrorMessage
									name='description'
									component='span'
									className={styles.error}
								/>
							</div>
							<div className={styles["form-btn-ctn"]}>
								<Button
									text='Done'
									//className={styles["form-btn"]}
									type='button'
									onClick={() => {
										updateSuccessMessage("");
										formik.resetForm();
										closeAddExercisePopup();
									}}
								></Button>
								<Button
									text='Add Exercise'
									type='submit'
									className={`${
										!(dirty && isValid) ? styles["disabled-btn"] : ""
									}`}
									disabled={!(dirty && isValid)}
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

export default ExerciseForm;
