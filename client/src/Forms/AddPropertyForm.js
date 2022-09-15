import { useCreatePropertyMutation } from "../app/api/propertyApiSlice";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import { selectProperty } from "../app/features/propertySlice";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { unitsList } from "../app/features/unitsListSlice";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";

function AddPropertyForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [createProperty ] = useCreatePropertyMutation();

    const { data: user } = useFetchUserQuery();
    const userId = user ? user.id : "";

    const createSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(30, "Too Long!").required(),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    name: "New property",
                    address: "",
                    city: "",
                    state: "",
                    postal_code: "",
                    country: "",
                    units: [],
                    user_id: userId,
                }}
                validationSchema={createSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    createProperty(values)
                        .then((r) => {
                            dispatch(selectProperty(r.data));
                            dispatch(unitsList(r.data.units));
                            navigate("/dashboard/details");
                        })
                        .then(
                            resetForm({
                                name: "New property",
                                address: "",
                                city: "",
                                state: "",
                                postal_code: "",
                                country: "",
                                units: [],
                                user_id: userId,
                            })
                        );
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
                                Property name
                            </label>
                            <input
                                id="name"
                                className="form-control"
                                type="name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                        </div>

                        <div className="float-end">
                            <ButtonCancelModal />
                            <ButtonSaveChanges
                                isSubmitting={isSubmitting}
                                text={"Add Property"}
                                isValid={isValid}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AddPropertyForm;
