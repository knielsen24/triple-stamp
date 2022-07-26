import ButtonSaveChanges from "../Buttons/ButtonSaveChanges";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useUpdateUserMutation } from "../../app/services/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../../app/features/userSlice";

function EditProfileForm() {
    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const dispatch = useDispatch();
    const user = useSelector(setUser);
    console.log(user.id)

    const SignupSchema = Yup.object().shape({
        full_name: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
        phone: Yup.string().phone(),
        business: Yup.string().max(30, "Too Long!"),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    id: user.id,
                    full_name: user.full_name,
                    phone: user.phone,
                    business: user.business,
                    account_name: user.account_name,
                }}
                validationSchema={SignupSchema}
                onSubmit={({values}, { setSubmitting }) => {
                    updateUser(values).then((r) => dispatch(login(r.data)));
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
                                Phone
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
                            {errors.phone && touched.phone && errors.phone}
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="business"
                                class="form-label float-start"
                            >
                                Business
                            </label>
                            <input
                                id="business"
                                class="form-control"
                                type="string"
                                name="business"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.business}
                            />
                            {errors.business &&
                                touched.business &&
                                errors.business}
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
                            <ButtonSaveChanges text={"Save Changes"} isSubmitting={isSubmitting} />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditProfileForm;
