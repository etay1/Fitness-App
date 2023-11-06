import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useWeightValidationSchema from "../../hooks/useWeightValidationSchema";
import { useWeightForm } from "../../hooks/useExerciseForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import "./WeightForm.css";
import { useEffect } from "react";


// const getLastWeight = () => {


// }


const initialFormValues = {
    date: new Date().toISOString().slice(0, 10),
    weight: 0,
};


const WeightForm = ({ closeAddWeightPopup, supabase }) => {
    const { isSuccess, handleInsertion } = useWeightForm(supabase);
    const { successMessage, updateSuccessMessage } = useSuccessMessage();
    const { validationSchema, key } = useWeightValidationSchema(updateSuccessMessage);



    return (
        <Formik
            key={key}
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onsubmit={(values, formik) => {
                handleInsertion(values, updateSuccessMessage);
                if (isSuccess) {
                    formik.resetForm();
                }
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <Form>
                        <div className="form-container">
                            <div className="input-container">
                                <label>Date:</label>
                                <Field
                                    type="date"
                                    name="date"
                                    id="date"
                                    className={
                                        errors.date && touched.date
                                            ? "date-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="date"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <div className="input-container">
                                <label> Weight </label>
                                <Field
                                    type="number"
                                    min="51"
                                    name="weight"
                                    id="weight"
                                    className={
                                        errors.weight && touched.weight
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="weight"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <div className="form-btn-ctn">
                                <button
                                    className="form-btn"
                                    type="button"
                                    onClick={() => {
                                        updateSuccessMessage("");
                                        formik.resetForm();
                                        closeAddWeightPopup();
                                    }}
                                >
                                    Done
                                </button>
                                <button
                                    type="submit"
                                    className={`form-btn ${!(dirty && isValid) ? "disabled-btn" : ""
                                        }`}
                                    disabled={!(dirty && isValid)}
                                >
                                    Add Exercise
                                </button>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}
