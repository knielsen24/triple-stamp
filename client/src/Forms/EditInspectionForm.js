import ButtonSaveChanges from "../Components/Buttons/ButtonSaveChanges";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import { useSelector } from "react-redux";
import { setSelectInspection } from "../app/features/inspectionSlice";
import { useUpdateInspectMutation } from "../app/api/propertyApiSlice";
import { setSelectProperty } from "../app/features/propertySlice";
import { setUnitsList } from "../app/features/unitsListSlice";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function EditInspectionForm() {
    const propertyState = useSelector(setSelectProperty);
    const inspectionState = useSelector(setSelectInspection);
    const unitsListState = useSelector(setUnitsList);
    const [unitID, setUnitID] = useState("");
    const [updateInspect] = useUpdateInspectMutation();

    const handleUnitId = (e) => setUnitID(e.target.value);

    const statusArray = ["upcoming", "in progress", "completed"];
    const typeNameArray = [
        "move-in",
        "move-out",
        "annual",
        "semi-annual",
        "quarterly",
        "monthly",
    ];
    const statusOptionList = statusArray.map((item, index) => {
        return <option key={index}>{item}</option>;
    });

    const typeNameOptionList = typeNameArray.map((item, index) => {
        return <option key={index}>{item}</option>;
    });

    const updateSchema = Yup.object().shape({
        title: Yup.string()
            .min(1, "Too Short!")
            .max(20, "Too Long!")
            .required("Required"),
    });

    let unitNumOptionList;
    if (unitsListState) {
        unitNumOptionList = unitsListState.map((unit) => {
            return (
                <option key={unit.id} value={unit.id}>
                    {unit.number + " " + (unit.label || "Label")}
                </option>
            );
        });
    }

    const initialFormData = {
        id: "" || inspectionState.id,
        title: "" || inspectionState.title,
        type_name: "" || inspectionState.type_name,
        status: "" || inspectionState.status,
        scheduled_date: "" || inspectionState.scheduled_date,
        unit_id: unitID || inspectionState.unit_id,
        property_id: "" || propertyState.id,
    };

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={initialFormData}
                validationSchema={updateSchema}
                onSubmit={(values, { setSubmitting }) => {
                    updateInspect(values);
                    setUnitID("");
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
                                htmlFor="unit_id"
                                className="form-label float-start"
                            >
                                Unit #
                            </label>

                            <select
                                id="unit_id"
                                className="form-control form-select capitalize"
                                type="string"
                                name="unit_id"
                                onChange={handleChange && handleUnitId}
                                onBlur={handleBlur}
                                value={values.unit_id}
                            >
                                <option>Select a unit</option>
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
                                className="form-control form-select text-capitalize"
                                type="string"
                                name="type_name"
                                // placeholder="Select a type"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.type_name}
                            >
                                <option
                                    defaultValue={
                                        "Select the type of inspection"
                                    }
                                ></option>
                                {typeNameOptionList}
                            </select>{" "}
                            {errors.type_name &&
                                touched.type_name &&
                                errors.type_name}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="status"
                                className="form-label float-start "
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                className="form-control form-select text-capitalize"
                                type="string"
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                            >
                                <option selected={"Select the status"}>
                                    Select the status
                                </option>

                                {statusOptionList}
                            </select>
                            {errors.status && touched.status && errors.status}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="scheduled_date"
                                className="form-label float-start"
                            >
                                Scheduled a date
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

export default EditInspectionForm;
