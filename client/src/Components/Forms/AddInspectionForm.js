import ButtonSaveChanges from "../Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useCreateUnitInspectMutation } from "../../app/services/propertyApiSlice";
import { setSelectUnit } from "../../app/features/unitSlice";
import { setSelectProperty } from "../../app/features/propertySlice";

function AddInspectionForm() {
    const dispatch = useDispatch();
    const unit = useSelector(setSelectUnit);
    const property = useSelector(setSelectProperty);
    const [createUnitInspect] = useCreateUnitInspectMutation();

    const updateSchema = Yup.object().shape({});

    const handleEndpoint = (inspect) => {
        console.log(inspect)
        // if (unit.id === "") return createUnitInspect(inspect);
        // else if
    };

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    title: "New Inspection",
                    type_name: "",
                    status: "",
                    scheduled_date: "",
                    unit_id: "" || unit.id,
                    unit: [
                        {
                            number: "",
                            property_id: "" || property.id,
                        },
                    ],
                }}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleEndpoint(values);
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
                                htmlFor="unit_id"
                                className="form-label float-start"
                            >
                                Unit #
                            </label>
                            <input
                                id="unit_id"
                                className="form-control"
                                type="string"
                                name="unit_id"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.unit_id}
                            />
                            {errors.unit_id &&
                                touched.unit_id &&
                                errors.unit_id}
                        </div>
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
                            {errors.scheduled_date &&
                                touched.scheduled_date &&
                                errors.scheduled_date}
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

export default AddInspectionForm;
