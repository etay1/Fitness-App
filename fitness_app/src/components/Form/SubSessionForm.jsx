import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSubSessionForm } from "../../hooks/useSubSessionForm";
import useSubSessionValidationSchema from "../../hooks/useSubSessionValidationSchema";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";

const initialFormValues = {
  exerciseName: "",
  startTime: "",
  endTime: "",
  sets: "0",
  repsPerSet: "0",
};

const SubSessionForm = ({ closeSubSessionPopup, category, supabase }) => {
  const { isSuccess, handleInsertion } = useSubSessionForm(supabase);
  const { successMessage, updateSuccessMessage } = useSuccessMessage();
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
        handleInsertion(values, category, updateSuccessMessage);
        console.log(isSuccess);
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
                <label>Exercise Name: </label>
                <Field
                  type="text"
                  name="exerciseName"
                  id="exerciseName"
                  className={
                    errors.exerciseName && touched.exerciseName
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="exerciseName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="input-container">
                <label>Start Time: </label>
                <Field
                  type="text"
                  name="startTime"
                  id="startTime"
                  className={
                    errors.startTime && touched.startTime ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="startTime"
                  component="span"
                  className="error"
                />
              </div>
              <div className="input-container">
                <label>End Time: </label>
                <Field
                  type="text"
                  name="endTime"
                  id="endTime"
                  className={
                    errors.endTime && touched.endTime ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="endTime"
                  component="span"
                  className="error"
                />
              </div>
              {category === "strength" && (
                <div className="input-container">
                  <label>Sets: </label>
                  <Field
                    type="number"
                    min="0"
                    name="sets"
                    id="sets"
                    className={
                      errors.sets && touched.sets ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name="sets"
                    component="span"
                    className="error"
                  />
                </div>
              )}
              {category === "strength" && (
                <div className="input-container">
                  <label>Reps per Set: </label>
                  <Field
                    type="number"
                    min="0"
                    name="repsPerSet"
                    id="repsPerSet"
                    className={
                      errors.repsPerSet && touched.repsPerSet
                        ? "input-error"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="repsPerSet"
                    component="span"
                    className="error"
                  />
                </div>
              )}
              <div className="form-btn-ctn">
                <button
                  className="form-btn"
                  type="button"
                  onClick={() => {
                    updateSuccessMessage("");
                    formik.resetForm();
                    closeSubSessionPopup();
                  }}
                >
                  Done
                </button>
                <button
                  type="submit"
                  className={`form-btn ${
                    !(dirty && isValid) ? "disabled-btn" : ""
                  }`}
                  disabled={!(dirty && isValid)}
                >
                  Add Workout
                </button>
              </div>
              <div className="success-ctn">
                <div className="success-message">{successMessage}</div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default SubSessionForm;
