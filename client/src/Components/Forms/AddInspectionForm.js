import ButtonSaveChanges from "../Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useCreateInspectMutation } from "../../app/services/propertyApiSlice";
import { setSelectUnit } from "../../app/features/unitSlice";
import { setUnitsList } from "../../app/features/unitsListSlice";
import ButtonOpenAddUnitModal from "../Buttons/ButtonOpenAddUnitModal";

function AddInspectionForm() {
    const dispatch = useDispatch();
    const unit = useSelector(setSelectUnit);
    const unitsListState = useSelector(setUnitsList);
    const [createInspect] = useCreateInspectMutation();

    let unitNumOptionList;
    if (unitsListState) {
        unitNumOptionList = unitsListState.map((unit) => {
            return <option key={unit.id}>{unit.number}</option>;
        });
    }

    const statusArray = ["none", "upcoming", "in progress", "compeleted"];
    const statusOptionList = statusArray.map((item, index) => {
        return <option key={index}>{item}</option>;
    });

    const typeNameArray = [
        "move-in",
        "move-out",
        "annual",
        "semi-annual",
        "quarterly",
        "monthly",
    ];
    const typeNameOptionList = typeNameArray.map((item, index) => {
        return <option key={index}>{item}</option>;
    });

    const updateSchema = Yup.object().shape({});

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
                }}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    createInspect(values);
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
                                Unit #{" "}
                                {unitsListState.length === 0 ? (
                                    <ButtonOpenAddUnitModal />
                                ) : null}
                            </label>

                            <select
                                id="unit_id"
                                className="form-control form-select"
                                type="string"
                                name="unit_id"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.unit_id}
                            >
                                <option selected>Select a unit</option>
                                {unitNumOptionList}
                            </select>
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
                            <select
                                id="type_name"
                                className="form-control form-select"
                                type="string"
                                name="type_name"
                                // placeholder="Select a type"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.type_name}
                            >
                                <option selected>
                                    Select the type of inspection
                                </option>
                                {typeNameOptionList}
                            </select>{" "}
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
                            <select
                                id="status"
                                className="form-control form-select"
                                type="string"
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                            >
                                <option selected>Select the status</option>
                                {statusOptionList}
                            </select>
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
