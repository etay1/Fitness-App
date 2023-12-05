import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useSessionValidationSchema from "../../hooks/SessionFormHooks/useSessionValidationSchema";
import { useSessionForm } from "../../hooks/SessionFormHooks/useSessionForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";
import Button from "../Button/Button";
import { supabase } from "../../supabase/client";
import SubSessionForm from "../forms/SubSessionForm";
import AddSubSession from "../popups/AddSubSession/AddSubSession";
import { useModalState } from "../../hooks/useModalState";

const initialFormValues = {
	date: new Date().toISOString().slice(0, 10),
	startTime: 0,
	endTime: 0,
};

const SessionForm = ({ closeAddSessionPopup }) => {
	const { successMessage, updateSuccessMessage } = useSuccessMessage();

	const { isSuccess, handleInsertion } = useSessionForm(updateSuccessMessage);

	const { validationSchema, key } =
		useSessionValidationSchema(updateSuccessMessage);

	const {
		isOpen: isAddSubSessionModalOpen,
		openModal: openAddSubSessionModal,
		closeModal: closeAddSubSessionModal,
	} = useModalState(false);

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
										errors.date && touched.date ? styles["input-error"] : null
									}
								/>
								<ErrorMessage
									name='date'
									component='span'
									className={styles.error}
								/>
							</div>
							<div className={styles["input-ctn"]}>
								<label>Start Time:</label>
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
								<label>End Time:</label>
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
									name='startTime'
									component='span'
									className={styles.error}
								/>
							</div>
							<hr />

							<div className={styles["form-btn-ctn"]}>
								<Button
									style={{ width: "100%" }}
									text='Add Sub Session'
									type='button'
									onClick={() => openAddSubSessionModal()}
								></Button>
							</div>
							<div className={styles["form-btn-ctn"]}>
								<Button
									text='Done'
									type='button'
									onClick={() => {
										updateSuccessMessage("");
										formik.resetForm();
										closeAddSessionPopup();
									}}
								></Button>

								<Button
									text='Add Session'
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
						<AddSubSession
							isAddSubSessionPopupOpen={isAddSubSessionModalOpen}
							closeAddSubSessionPopup={closeAddSubSessionModal}
						/>
					</Form>
				);
			}}
		</Formik>
	);
};

export default SessionForm;
