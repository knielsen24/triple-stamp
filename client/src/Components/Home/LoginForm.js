import "../../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLoginApiMutation } from "../../app/services/userApiSlice";
import { useDispatch } from "react-redux";
import { login } from "../../app/features/userSlice";

function LoginForm() {
    const [toggleModal, setToggleModal] = useState(false)
    const [loginApi, { isLoading }] = useLoginApiMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
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
                    email: "",
                    password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    loginApi(values)
                        .then((r) => dispatch(login(r.data)))
                        .then(setToggleModal(true))
                        .then(navigate("dashboard"));
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
                }) => (
                    <form onSubmit={handleSubmit}>
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
                                Enter password
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
                                aria-label={ !toggleModal ? "Close" : null}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;
