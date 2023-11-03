import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useSubSessionValidationSchema from "../../hooks/forms/SubSession/useSubSessionValidationSchema";
import { useSubSessionForm } from "../../hooks/forms/SubSession/useSubSessionForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";

const SubSessionForm = ({ closeAddSubSessionPopup, category, supabase }) => {
	const { isSuccess, handleInsertion } = useSubSessionForm(supabase);

	const { successMessage, updateSuccessMessage } = useSuccessMessage();

	const { validationSchema, key } = useSubSessionValidationSchema(
		category,
		updateSuccessMessage
	);

	const initialFormValues = {
		dropDownSelection: "",
		startTime: "",
		endTime: "",
		sets: 0,
		repsPerSet: 0,
	};

	return (
		<Formik
			key={key}
			initialValues={initialFormValues}
			validationSchema={validationSchema}
			onSubmit={(values, formik) => {
				console.log(values);
			}}
		>
			{(formik) => {
				const { errors, touched, isValid, dirty } = formik;
				return (
					<Form>
						<div className={styles["form-ctn"]}>
							<div className={styles["input-ctn"]}>
								<label>Workout:</label>
								<Field
									as='select'
									name='dropDownSelection'
									id='dropDownSelection'
									className={
										errors.dropDownSelection && touched.dropDownSelection
											? styles["input-error"]
											: null
									}
								>
									<option value=''>-- Select --</option>
									<option value='option1'>Option 1</option>
									<option value='option2'>Option 2</option>
									<option value='option3'>Option 3</option>
								</Field>
								<ErrorMessage
									name='dropDownSelection'
									component='span'
									className='error'
								/>
							</div>
							<div className={styles["input-ctn"]}>
								<label>Start Time:</label>
								<Field
									type='datetime-local'
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
									className='error'
								/>
							</div>
							<div className={styles["input-ctn"]}>
								<label>End Time:</label>
								<Field
									type='datetime-local'
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
									className='error'
								/>
							</div>

							{category === "strength" && (
								<div className={styles["input-ctn"]}>
									<label>Sets:</label>
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
										className='error'
									/>
								</div>
							)}

							{category === "strength" && (
								<div className={styles["input-ctn"]}>
									<label>Reps Per Set:</label>
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
										className='error'
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
									Add Exercise
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
