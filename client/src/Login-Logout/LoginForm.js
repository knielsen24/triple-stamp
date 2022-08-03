import { useLoginApiMutation } from "../app/api/userApiSlice";
import { selectProperty } from "../app/features/propertySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginApi] = useLoginApiMutation();

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
                    loginApi(values)
                        .then(dispatch(selectProperty(initialData)))
                        .then(navigate("dashboard/main"));
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

                        <div className="float-end">
                            {/*
                                this needs a conditon
                                if form is validated then close modal
                                otherwise
                                render error message
                            */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                id="modal-btn-start-now"
                                data-bs-dismiss="modal"
                                aria-label="Close"
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
