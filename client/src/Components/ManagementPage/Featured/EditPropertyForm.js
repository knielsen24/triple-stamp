import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import ButtonCancelAddProperty from "../../Buttons/ButtonCancelAddProperty";

function EditPropertyForm() {
    const formValues = ["name", "address", "city", "state", "postal_code", "country", "units"]

    const formInputsArray = formValues.map((value) => {console.log(value)})

    const createSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    name: "New property",

                }}
                validationSchema={createSchema}
                onSubmit={(values, { setSubmitting }) => {
                    (values)
                    .then((r)=> {})
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
                            <ButtonCancelAddProperty />
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

export default EditPropertyForm;
