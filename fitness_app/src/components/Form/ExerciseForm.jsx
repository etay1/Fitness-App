import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useExerciseValidationSchema from "../../hooks/useExerciseValidationSchema";
import "./ExerciseForm.css";

const initialFormValues = {
  exerciseName: "",
  caloriesPerRep: 0,
  caloriesPerDuration: 0,
  description: "",
};

const ExerciseForm = ({ closeAddExercisePopup, category }) => {
  const { validationSchema, key } = useExerciseValidationSchema(category);

  return (
    <Formik
      key={key}
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        console.log(values);
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
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ExerciseForm;
