import { setSelectProperty } from "../app/features/propertySlice";
import { useCreateUnitMutation } from "../app/api/propertyApiSlice";
import { setUnitsList, unitsList } from "../app/features/unitsListSlice";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";

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

    const initialFormData = {
        number: "",
        label: "",
        square_feet: "",
        property_id: propertyState.id || "",
    };

    const createSchema = Yup.object().shape({
        number: Yup.string().min(1, "Too Short!").max(20, "Too Long!"),
        label: Yup.string().min(1, "Too Short!").max(30, "Too Long!"),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={initialFormData}
                validationSchema={createSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    createUnit(values)
                        .then((r) => {
                            handleUnitsListState(r.data);
                            resetForm(initialFormData);
                        })
                        .then(
                            setTimeout(() => {
                                setSubmitting(false);
                            }, 400)
                        );
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
                                htmlFor="number"
                                className="form-label float-start"
                            >
                                Add a unit number. Letters are acceptable
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
                        <div className="mb-3">
                            <label
                                htmlFor="square_feet"
                                className="form-label float-start"
                            >
                                Square Feet
                            </label>
                            <input
                                id="square_feet"
                                className="form-control"
                                type="string"
                                name="square_feet"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.square_feet}
                            />
                            {errors.square_feet &&
                                touched.square_feet &&
                                errors.square_feet}
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
                                isSubmitting={isSubmitting}
                                text={"Add unit"}
                                isValid={isValid}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AddUnitForm;
