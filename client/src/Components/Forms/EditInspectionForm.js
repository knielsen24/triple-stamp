import ButtonSaveChanges from "../Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { setSelectInspection } from "../../app/features/inspectionSlice";
import { useUpdateInspectMutation } from "../../app/services/propertyApiSlice";

function EditInspectionForm() {
    const dispatch = useDispatch();
    const inspectionState = useSelector(setSelectInspection);
    const [updateInspect] = useUpdateInspectMutation();

    const updateSchema = Yup.object().shape({
        title: Yup.string()
            .min(1, "Too Short!")
            .max(20, "Too Long!")
            .required("Required"),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    id: "" || inspectionState.id,
                    title: "" || inspectionState.title,
                    type_name: "" || inspectionState.type_name,
                    status: "" || inspectionState.status,
                    scheduled_date: "" || inspectionState.scheduled_date,
                    unit_id: "" || inspectionState.unit_id,
                }}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    updateInspect(values)
                    .then((r) => console.log(r.data));
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
                                htmlFor="title"
                                className="form-label float-start"
                            >
                                Title
                            </label>
                            <input
                                id="title"
                                className="form-control"
                                type="string"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {errors.title && touched.title && errors.title}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="type_name"
                                className="form-label float-start"
                            >
                                Type
                            </label>
                            <input
                                id="type_name"
                                className="form-control"
                                type="string"
                                name="type_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.type_name}
                            />
                            {errors.type_name &&
                                touched.type_name &&
                                errors.type_name}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="status"
                                className="form-label float-start"
                            >
                                Status
                            </label>
                            <input
                                id="status"
                                className="form-control"
                                type="string"
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                            />
                            {errors.status && touched.status && errors.status}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="scheduled_date"
                                className="form-label float-start"
                            >
                                Scheduled Date
                            </label>
                            <input
                                id="scheduled_date"
                                className="form-control"
                                type="date"
                                name="scheduled_date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.scheduled_date}
                            />
                            {errors.scheduled_date && touched.scheduled_date && errors.scheduled_date}
                        </div>
                        <div className="float-end">
                            <ButtonCancelModal />
                            <ButtonSaveChanges
                                isSubmitting={isSubmitting}
                                text={"Save Changes"}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditInspectionForm;
