import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useExerciseValidationSchema from "../../hooks/ExerciseFormHooks/useExerciseValidationSchema";
import { useAlterExerciseForm } from "../../hooks/ExerciseFormHooks/useAlterExerciseForm.js";
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import styles from "./form.module.css";
import { supabase } from "../../supabase/client";
import Button from "../Button/Button.jsx";

const AlterExerciseForm = ({
  closeEditExercisePopup,
  exerciseType,
  exerciseId,
  exerciseName,
  exerciseDesc,
  exerciseCalories,
}) => {
  const { successMessage, updateSuccessMessage } = useSuccessMessage();
  const { isSuccess, handleAlter } = useAlterExerciseForm(
    supabase,
    updateSuccessMessage
  );

  const { validationSchema, key } = useExerciseValidationSchema(
    exerciseType,
    updateSuccessMessage
  );

  return (
    <Formik
      key={key}
      initialValues={{
        exerciseName: exerciseName || "",
        exerciseId: exerciseId || "",
        caloriesPerRep: exerciseType === "strength" ? exerciseCalories : 0,
        caloriesPerDuration: exerciseType === "cardio" ? exerciseCalories : 0,
        description: exerciseDesc || "",
      }}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values, formik) => {
        handleAlter(values, exerciseType);
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
                  type="text"
                  name="exerciseName"
                  id="exerciseName"
                  className={
                    errors.exerciseName && touched.exerciseName
                      ? styles["input-error"]
                      : null
                  }
                />
                <ErrorMessage
                  name="exerciseName"
                  component="span"
                  className={styles.error}
                />
              </div>
              {exerciseType === "strength" && (
                <div className={styles["input-ctn"]}>
                  <label>Calories / rep:</label>
                  <Field
                    type="number"
                    min="0"
                    name="caloriesPerRep"
                    id="caloriesPerRep"
                    className={
                      errors.caloriesPerRep && touched.caloriesPerRep
                        ? styles["input-error"]
                        : null
                    }
                  />
                  <ErrorMessage
                    name="caloriesPerRep"
                    component="span"
                    className={styles.error}
                  />
                </div>
              )}
              {exerciseType === "cardio" && (
                <div className={styles["input-ctn"]}>
                  <label>Calories / 15 minutes:</label>
                  <Field
                    type="number"
                    min="0"
                    name="caloriesPerDuration"
                    id="caloriesPerDuration"
                    className={
                      errors.caloriesPerDuration && touched.caloriesPerDuration
                        ? styles["input-error"]
                        : null
                    }
                  />
                  <ErrorMessage
                    name="caloriesPerDuration"
                    component="span"
                    className={styles.error}
                  />
                </div>
              )}
              <div className={styles["input-ctn"]}>
                <label>Description:</label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  className={
                    errors.description && touched.description
                      ? styles["input-error"]
                      : null
                  }
                />
                <ErrorMessage
                  name="description"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles["form-btn-ctn"]}>
                <Button
                  text ="Done"
                  type="button"
                  onClick={() => {
                    updateSuccessMessage("");
                    formik.resetForm();
                    closeEditExercisePopup();
                  }}
                > 
                </Button>
                <Button
                  text="Confirm"
                  type="submit"
                  className={` ${
                    !(dirty && isValid) ? styles["disabled-btn"] : ""
                  }`}
                  disabled={!(dirty && isValid)}
                >
                </Button>
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

export default AlterExerciseForm;
