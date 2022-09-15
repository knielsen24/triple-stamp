import { useLoginApiMutation } from "../app/api/userApiSlice";
import { selectProperty } from "../app/features/propertySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";

function LoginForm({ handleSubmitError }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginApi] = useLoginApiMutation();
    // console.log(error);

    const initialData = {
        name: "",
        id: "",
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
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
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
                        .unwrap()
                        .then((payload) => {
                            if (payload.id) {
                                dispatch(selectProperty(initialData));
                                navigate("/dashboard/main");
                                setSubmitting(false);
                            }
                        })
                        .catch((error) => {
                            if (error) {
                                handleSubmitError(error.data.error);
                                setSubmitting(false);
                            }
                        });
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
                    // resetForm,
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
                            <ButtonCancelModal />
                            <ButtonSaveChanges
                                // error={error}
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
