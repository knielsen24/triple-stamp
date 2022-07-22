import "../../App.css";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useCreateUserMutation } from "../../app/services/userApiSlice";

function SignUpForm() {
    const [createUser, { isLoading }] = useCreateUserMutation();

    const SignupSchema = Yup.object().shape({
        full_name: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(4, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    full_name: "",
                    email: "",
                    password: "",
                    account_name: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    createUser(values);
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label
                                htmlFor="full_name"
                                class="form-label float-start"
                            >
                                Full Name
                            </label>
                            <input
                                id="full_name"
                                class="form-control"
                                type="string"
                                name="full_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.full_name}
                            />
                            {errors.full_name &&
                                touched.full_name &&
                                errors.full_name}
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="email"
                                class="form-label float-start"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                class="form-control"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="password"
                                class="form-label float-start"
                            >
                                Create a password
                            </label>
                            <input
                                id="password"
                                class="form-control"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password &&
                                touched.password &&
                                errors.password}
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="account_name"
                                class="form-label float-start"
                            >
                                Account Name
                            </label>
                            <input
                                id="account_name"
                                class="form-control"
                                type="string"
                                name="account_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.account_name}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div class="float-end">
                            {/*
                                this needs a conditon
                                if form is validated then close modal
                                otherwise
                                render error message
                            */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                class="btn btn-primary"
                                id="modal-btn-start-now"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Finish Sign Up
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default SignUpForm;

// fetch("http://localhost:4000/signup", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
// }).then((r) => {
//     if (r.ok) {
//         r.json().then((user) => dispatch(login(user)))
//         .then(setTimeout(() => {
//             setSubmitting(false);
//         }, 400));
//     } else {
//         r.json().then((errorData) =>
//             setErrors(errorData.errors)
//         );
//     }
// });
// validate={(values) => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = "Required";
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
//             values.email
//         )
//     ) {
//         errors.email = "Invalid email address";
//     }
//     return errors;
// }}
