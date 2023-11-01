import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useExerciseValidationSchema from "../../hooks/useExerciseValidationSchema";
import { useExerciseForm } from "../../hooks/useExerciseForm";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import "./ExerciseForm.css";
import { useEffect } from "react";

const initialFormValues = {
  exerciseName: "",
  caloriesPerRep: 0,
  caloriesPerDuration: 0,
  description: "",
};

const ExerciseForm = ({ closeAddExercisePopup, category, supabase }) => {
  const { isSuccess, handleInsertion } = useExerciseForm(supabase);

  const { successMessage, updateSuccessMessage } = useSuccessMessage();

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
                <label>Exercise Name:</label>
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
              {category === "strength" && (
                <div className="input-container">
                  <label>Calories / rep:</label>
                  <Field
                    type="number"
                    min="0"
                    name="caloriesPerRep"
                    id="caloriesPerRep"
                    className={
                      errors.caloriesPerRep && touched.caloriesPerRep
                        ? "input-error"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="caloriesPerRep"
                    component="span"
                    className="error"
                  />
                </div>
              )}
              {category === "cardio" && (
                <div className="input-container">
                  <label>Calories / 15 minutes:</label>
                  <Field
                    type="number"
                    min="0"
                    name="caloriesPerDuration"
                    id="caloriesPerDuration"
                    className={
                      errors.caloriesPerDuration && touched.caloriesPerDuration
                        ? "input-error"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="caloriesPerDuration"
                    component="span"
                    className="error"
                  />
                </div>
              )}
              <div className="input-container">
                <label>Description:</label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  className={
                    errors.description && touched.description
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="description"
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
                    closeAddExercisePopup();
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
                  Add Exercise
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

export default ExerciseForm;
