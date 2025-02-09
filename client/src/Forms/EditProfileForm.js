import {
    useFetchUserQuery,
    useUpdateUserMutation,
} from "../app/api/userApiSlice";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";

function EditProfileForm() {
    const [updateUser] = useUpdateUserMutation();

    const { data: user } = useFetchUserQuery();

    const updateSchema = Yup.object().shape({
        full_name: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
        phone: Yup.string().phone(),
        account_name: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    id: "" || user.id,
                    full_name: "" || user.full_name,
                    phone: "" || user.phone,
                    business: "" || user.business,
                    account_name: "" || user.account_name,
                    image: "" || user.image,
                }}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    updateUser(values).then((r) => {});
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
                                htmlFor="image"
                                className="form-label float-start"
                            >
                                Image URL
                            </label>
                            <input
                                id="image"
                                className="form-control"
                                type="string"
                                name="image"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image}
                            />
                            {errors.image && touched.image && errors.image}
                        </div>
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
                                text={"Update"}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditProfileForm;
