import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useUserWeightValidationSchema from "../../hooks/UserWeightFormHooks/useUserWeightValidationSchema"
import { useUserWeightForm } from "../../hooks/UserWeightFormHooks/useUserWeightForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";

const initialFormValues = {
	date: "",
    weight: 0,
};

const UserWeightForm = ({ closeAddUserWeightPopup, session }) => {
	const { successMessage, updateSuccessMessage } = useSuccessMessage();

	const { isSuccess, handleInsertion } = useUserWeightForm(
        session,
		updateSuccessMessage,
	);

	const { validationSchema, key } = useUserWeightValidationSchema(
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
								<label>Date:</label>
								<Field
									type='date'
									name='date'
									id='date'
									className={
										errors.date && touched.date
											? styles["input-error"]
											: null
									}
								/>
								<ErrorMessage
									name='date'
									component='span'
									className={styles.error}
								/>
							</div>


							<div className={styles["input-ctn"]}>
								<label>Weight:</label>
								<Field
									as='number'
									name='weight'
									id='weight'
									className={
										errors.weight && touched.weight
											? styles["input-error"]
											: null
									}
								/>
								<ErrorMessage
									name='weight'
									component='span'
									className={styles.error}
								/>
							</div>


							<div className={styles["form-btn-ctn"]}>
								<button
									className={styles["form-btn"]}
									type='button'
									onClick={() => {
										updateSuccessMessage("");
										formik.resetForm();
										closeAddUserWeightPopup();
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

export default UserWeightForm;
