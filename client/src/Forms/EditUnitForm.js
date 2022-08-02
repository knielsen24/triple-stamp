import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import { setSelectUnit } from "../app/features/unitSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useUpdateUnitMutation } from "../app/api/propertyApiSlice";
import { setUnitsList, unitsList } from "../app/features/unitsListSlice";

function EditUnitForm() {
    const dispatch = useDispatch();
    const unitState = useSelector(setSelectUnit);
    const unitsListState = useSelector(setUnitsList);
    const [updateUnit] = useUpdateUnitMutation();

    const handleUpdateUnit = (data) => {
        const filteredList = unitsListState.filter(
            (unit) => unit.id !== data.id
        );
        const newUnitsList = [...filteredList, data];
        dispatch(unitsList(newUnitsList));
    };

    const updateSchema = Yup.object().shape({
        number: Yup.string()
            .min(1, "Too Short!")
            .max(20, "Too Long!")
            .required("Required"),
        Label: Yup.string().min(1, "Too Short!").max(30, "Too Long!"),
        square_feet: Yup.number(),
    });

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    id: "" || unitState.id,
                    number: "" || unitState.number,
                    square_feet: "" || unitState.square_feet,
                    label: "" || unitState.label,
                    property_id: "" || unitState.property_id,
                }}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    updateUnit(values).then((r) => {
                        handleUpdateUnit(r.data);
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
                                Number or Identifier
                            </label>
                            <input
                                id="number"
                                className="form-control"
                                type="string"
                                name="number"
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
                                Label
                            </label>
                            <input
                                id="label"
                                className="form-control"
                                type="string"
                                name="label"
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
                            <ButtonCancelModal />
                            <ButtonSaveChanges
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

export default EditUnitForm;
