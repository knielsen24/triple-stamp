import { useLoginApiMutation } from "../app/api/userApiSlice";
import { selectProperty } from "../app/features/propertySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginApi, {error}] = useLoginApiMutation();
    // const [error, setError] = useState([]);

    const initialData = {
        name: "",
        id: "",
        name: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        units: [{ label: "label" }],
        user_id: "",
    };

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
                    loginApi(values).then((r) => {
                        console.log(error);
                        // if (r.data.full_name !== "") {
                        //     r.json().then(dispatch(selectProperty(initialData))).then(
                        //         navigate("/dashboard/main")
                        //     );
                        // }
                        // else {
                        //     r.json().then((errorData) => setError(errorData.error));
                        // }
                    });

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
                    isValid,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="form-label float-start"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                className="form-control"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="form-label float-start"
                            >
                                Enter password
                            </label>
                            <input
                                id="password"
                                className="form-control"
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
                        {error ? error.length > 0 && (
                            <div
                                style={{
                                    color: "red",
                                    listStyleType: "none",
                                    textAlign: "center",
                                }}
                            >
                                <p>{error}</p>
                            </div>
                        ) : null}
                        <div className="float-end">
                            <ButtonCancelModal />
                            <ButtonSaveChanges
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={"Sign In"}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;
