import { setSelectProperty } from "../../app/features/propertySlice";
import { useCreateUnitMutation } from "../../app/services/propertyApiSlice";
import { setUnitsList, unitsList } from "../../app/features/unitsListSlice";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";

function AddUnitForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const propertyState = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    const [createUnit, { isLoading }] = useCreateUnitMutation();

    const handleUnitsListState = (newUnit) => {
        const newUnitsList = [...unitsListState, newUnit];
        dispatch(unitsList(newUnitsList));
    };

    const createSchema = Yup.object().shape({
        number: Yup.string().min(1, "Too Short!").max(20, "Too Long!"),
        label: Yup.string().min(1, "Too Short!").max(30, "Too Long!"),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    number: "",
                    label: "",
                    square_feet: "",
                    property_id: propertyState.id || "",
                }}
                validationSchema={createSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    createUnit(values).then((r) => {
                        handleUnitsListState(r.data);
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
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="number"
                                className="form-label float-start"
                            >
                                Unit number. Letters are acceptable!
                            </label>
                            <input
                                id="number"
                                className="form-control"
                                type="string"
                                name="number"
                                placeholder="Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                            />
                            {errors.number && touched.number && errors.number}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="label"
                                className="form-label float-start"
                            >
                                Add a label (optional)
                            </label>
                            <input
                                id="label"
                                className="form-control"
                                type="string"
                                name="label"
                                placeholder="Label"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.label}
                            />
                            {errors.label && touched.label && errors.label}
                        </div>

                        <div className="float-end">
                            {/*
                                this needs a conditon
                                if form is validated then close modal
                                otherwise
                                render error message
                            */}
                            <ButtonCancelModal />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                id="modal-btn-start-now"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Add unit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AddUnitForm;
