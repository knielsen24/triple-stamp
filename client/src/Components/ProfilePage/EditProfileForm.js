import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useUpdateUserMutation } from "../../app/services/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../../app/features/userSlice";
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges";

function EditProfileForm() {
    const dispatch = useDispatch();
    const user = useSelector(setUser);
    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const updateSchema = Yup.object().shape({
        full_name: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
        phone: Yup.string().phone().nullable(),
        business: Yup.string().max(30, "Too Long!").nullable(),
        account_name: Yup.string().max(30, "Too Long!").nullable(),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    id: user.id,
                    full_name: user.full_name,
                    phone: user.phone || "",
                    business: user.business || "",
                    account_name: user.account_name,
                }}
                validationSchema={updateSchema}
                onSubmit={({ values }, { setSubmitting }) => {
                    if (values) {
                        console.log(values);
                        updateUser(values).then((r) => dispatch(login(r.data)));
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }
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
                                htmlFor="phone"
                                className="form-label float-start"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                className="form-control"
                                type="string"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {errors.phone && touched.phone && errors.phone}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="business"
                                className="form-label float-start"
                            >
                                Business
                            </label>
                            <input
                                id="business"
                                className="form-control"
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
                                value={values.account_name || ""}
                            />
                            {errors.account_name &&
                                touched.account_name &&
                                errors.account_name}
                        </div>
                        <div className="float-end">
                            {/* <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                id="modal-btn-start-now"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Save Changes
                            </button> */}
                            {/*
                                this needs a conditon
                                if form is changed then Save changes
                                if form is not changed then cancel
                            */}
                            <ButtonSaveChanges
                                text={"Save Changes"}
                                isSubmitting={isSubmitting}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditProfileForm;
