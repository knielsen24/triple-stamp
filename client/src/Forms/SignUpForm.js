import { useCreateUserMutation } from "../app/api/userApiSlice";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";

function SignUpForm() {
    const navigate = useNavigate();

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
        account_name: Yup.string()
            .min(2, "Too Short!")
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
                    createUser(values)
                        .then((r) => {})
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
                    isValid,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="full_name"
                                className="form-label float-start"
                            >
                                Full Name
                            </label>
                            <input
                                id="full_name"
                                className="form-control"
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
                        <div className="mb-3">
                            <label
                                htmlFor="email-signup"
                                className="form-label float-start"
                            >
                                Email address
                            </label>
                            <input
                                id="email-signup"
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
                                htmlFor="password-signup"
                                className="form-label float-start"
                            >
                                Create a password
                            </label>
                            <input
                                id="password-signup"
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
                        <div className="mb-3">
                            <label
                                htmlFor="account_name"
                                className="form-label float-start"
                            >
                                Account Name
                            </label>
                            <input
                                id="account_name"
                                className="form-control"
                                type="string"
                                name="account_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.account_name}
                            />
                            {errors.account_name &&
                                touched.account_name &&
                                errors.account_name}
                        </div>
                        <div className="float-end">
                            <ButtonCancelModal />
                            <ButtonSaveChanges
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={"Finish Sign Up"}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default SignUpForm;
