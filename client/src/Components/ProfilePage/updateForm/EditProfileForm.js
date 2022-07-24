import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useCreateUserMutation } from "../../../app/services/userApiSlice";
import { useDispatch } from "react-redux";
import ButtonSaveChanges from "../../Buttons/ButtonSaveChanges";

function EditProfileForm() {
    const [createUser, { isLoading }] = useCreateUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        full_name: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
        phone: Yup.string()
            .length(10, "Must be 10 digits")

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
                                htmlFor="phone"
                                class="form-label float-start"
                            >
                                Full Name
                            </label>
                            <input
                                id="phone"
                                class="form-control"
                                type="string"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {errors.phone &&
                                touched.phone &&
                                errors.phone}
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
                            {errors.account_name &&
                                touched.account_name &&
                                errors.account_name}
                        </div>
                        <div class="float-end">
                            {/*
                                this needs a conditon
                                if form is changed then Save changes
                                if form is not changed then cancel
                            */}
                            <ButtonSaveChanges isSubmitting={isSubmitting} />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditProfileForm;
