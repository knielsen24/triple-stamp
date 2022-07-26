import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useCreatePropertyMutation } from "../../../app/services/propertyApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../app/features/userSlice";
import ButtonCancelAddProperty from "../../Buttons/ButtonCancelAddProperty";

function AddPropertyForm() {
    const [createProperty, { isLoading }] = useCreatePropertyMutation();
    // const dispatch = useDispatch();
    const user = useSelector(setUser);

    const createSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    name: "New property",
                    user_id: user.id
                }}
                validationSchema={createSchema}
                onSubmit={(values, { setSubmitting }) => {
                    createProperty(values)
                    .then((r)=> console.log(r))
                    // loginApi(values)
                    //     .then((r) => dispatch(login(r.data)))
                    //     .then(navigate("dashboard"));
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
                            {/*
                                this needs a conditon
                                if form is validated then close modal
                                otherwise
                                render error message
                            */}
                            <ButtonCancelAddProperty  />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                id="modal-btn-start-now"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Create Property
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AddPropertyForm;
