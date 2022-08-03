import {
    selectProperty,
    setSelectProperty,
} from "../app/features/propertySlice";
import { useUpdatePropertyMutation } from "../app/api/propertyApiSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";
import { Formik } from "formik";
import * as Yup from "yup";

function EditPropertyForm() {
    const dispatch = useDispatch();
    const [updateProperty, isLoading] = useUpdatePropertyMutation();

    const propertyState = useSelector(setSelectProperty);

    let initialData = {};

    if (propertyState) {
        initialData = {
            id: propertyState.id,
            name: propertyState.name,
            address: propertyState.address,
            city: propertyState.city,
            state: propertyState.state,
            postal_code: propertyState.postal_code,
            country: propertyState.country,
            user_id: propertyState.user_id,
        };
    }

    const updateSchema = Yup.object().shape({
        id: Yup.number().required(),
        name: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
        address: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        postal_code: Yup.string(),
        country: Yup.string(),
        user_id: Yup.number().required(),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={initialData}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    updateProperty(values).then((r) => {
                        dispatch(selectProperty(r.data));
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
                                htmlFor="name"
                                className="form-label float-start"
                            >
                                Property Name
                            </label>
                            <input
                                id="name"
                                className="form-control"
                                type="string"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="address"
                                className="form-label float-start"
                            >
                                Address
                            </label>
                            <input
                                id="address"
                                className="form-control"
                                type="string"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {errors.address &&
                                touched.address &&
                                errors.address}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="city"
                                className="form-label float-start"
                            >
                                City
                            </label>
                            <input
                                id="city"
                                className="form-control"
                                type="string"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                            {errors.city && touched.city && errors.city}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="state"
                                className="form-label float-start"
                            >
                                State
                            </label>
                            <input
                                id="state"
                                className="form-control"
                                type="string"
                                name="state"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.state}
                            />
                            {errors.state && touched.state && errors.state}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="postal_code"
                                className="form-label float-start"
                            >
                                Zip code
                            </label>
                            <input
                                id="postal_code"
                                className="form-control"
                                type="string"
                                name="postal_code"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.postal_code}
                            />
                            {errors.postal_code &&
                                touched.postal_code &&
                                errors.postal_code}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="country"
                                className="form-label float-start"
                            >
                                Country
                            </label>
                            <input
                                id="country"
                                className="form-control"
                                type="string"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                            />
                            {errors.country &&
                                touched.country &&
                                errors.country}
                        </div>
                        <div className="float-end">
                            {/*
                                this needs a conditon
                                if form is validated then close modal
                                otherwise
                                render error message
                            */}
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

export default EditPropertyForm;
