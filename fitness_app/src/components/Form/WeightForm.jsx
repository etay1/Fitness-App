import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useWeightValidationSchema from "../../hooks/useWeightValidationSchema";
import  useUserWeightForm  from "../../hooks/useUserWeightForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
//import styles from "./weightForm.module.css";

///// This would be used to get the last submitted weight from the database
///// This also seems like it would be a lot of work that I could potentially fuck up
// const getLastWeight = () => {

// }

//// Below code has been updated to be put inside the form itself in an effort to
//// make userId function again
// const initialFormValues = {
//     date: new Date().toISOString().slice(0, 10),
//     weight: 0,
//     userId: null,
// };

    

const WeightForm = ({ closeAddUserWeightPopup, supabase, session }) => {
    const initialValues = {
        date: new Date().toISOString().slice(0, 10),
        weight: 51,
        user_id: session.user.id
    }


    const { isSuccess, handleInsertion } = useUserWeightForm(supabase);
    const { successMessage, updateSuccessMessage } = useSuccessMessage();
    const { validationSchema, key } = useWeightValidationSchema(updateSuccessMessage);



    return (
        <Formik
            key={key}
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values, formik) => {
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
                                        console.log("test");
                                        closeAddUserWeightPopup();
                                        
                                    }}
                                >
                                    Done
                                </button>
                                <div className="form-btn-ctn">
                                    <button
                                        className="form-btn"
                                        type="button"
                                        onClick={() => {
                                            console.log(Formik.values);
                                        }}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className={`form-btn ${!(dirty && isValid) ? "disabled-btn" : ""
                                        }`}
                                    disabled={!(dirty && isValid)}
                                >
                                    Add Weight
                                </button>

                                <div className="success-ctn">
                                    <div className="success-message">{successMessage}</div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default WeightForm;
