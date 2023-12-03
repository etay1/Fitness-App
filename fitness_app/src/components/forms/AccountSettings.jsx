import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import useAccountSettingsValidation from "../../hooks/useAccountSettingsValidation";
import styles from "./AccountSettings.module.css";


const AccountSettings = ({ isSignup, onSubmit }) => {
    const { validationSchema } = useAccountSettingsValidation();

    return (
    <div className={styles["account-form-ctn"]}>
        <Formik className={styles["account-form"]}
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                dob: "",
                gender: "",
                phoneNumber: "",
                address: { street: "", city: "", state: "", zip: "" },
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {
                    if (isSignup) {
                        //api call here

                        alert("signed up succesfully!" + JSON.stringify(values, null, 2));
                    } else {
                        //api call here

                        alert("Profile updated succesfully!" + JSON.stringify(values, null, 2));
                    }
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className={styles["account-form"]}>
                <div className={styles["input-ctn"]}>
                    <label>First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Phone Number</label>
                    <Field name="phoneNumber" type="tel" placeholder = "555-555-5555"/>
                    <ErrorMessage name="phoneNumber" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label> Confirm Password</label>
                    <Field name="confirmPassword" type="password" />
                    <ErrorMessage name="confirmPassword" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Date Of Birth</label>
                    <Field name="dob" type="text" placeholder="YYYY-MM-DD"
                    format={(value) => {

                        if (!value) return "";
                        const date = new Date(value);
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();
                        return `${year}-${month}-${day}`;
                    }}
                    />
                    <ErrorMessage name="dob" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Gender </label>
                    <Field as="select" name="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </Field>
                    <ErrorMessage name="gender" />
                </div>


                <div className={styles["input-ctn"]}>
                    <label>Street</label>
                    <Field name="address.street" type="text" />
                    <ErrorMessage name="address.street" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>City</label>
                    <Field name="address.city" type="text" />
                    <ErrorMessage name="address.city" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>State</label>
                    <Field name="address.state" type="text" />
                    <ErrorMessage name="address.state" />
                </div>

                <div className={styles["input-ctn"]}>
                    <label>Zip Code</label>
                    <Field name="address.zip" type="text" />
                    <ErrorMessage name="address.zip" />
                </div>

                <div className={styles["form-btn-ctn"]}>
                    <button type='submit' className={styles["form-btn"]}>
                        {isSignup ? "Sign Up" : "Update Profile"}
                    </button>
                </div>
            </Form>
        </Formik>
    </div>
    );
};

export default AccountSettings;
