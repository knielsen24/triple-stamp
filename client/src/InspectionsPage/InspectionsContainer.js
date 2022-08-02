import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../Components/AccordianItems/UnitAllInspects";
import DeleteInspectionModal from "../Components/Modals/DeleteInspectionModal";
import EditModalTemp from "../Components/Modals/EditModalTemp";
import PropInspectAccordians from "./PropInspectAccordians";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const unit = useSelector(setSelectUnit);

    return (
        <div className="container border-endtext-center min-vh-100">
            <DeleteInspectionModal />
            <EditModalTemp
                modalId={"edit-inspections-form"}
                header={"Edit inspection information"}
            />

            <Routes>
                <Route
                    path="property"
                    element={
                        property.name === "" ? null : <PropInspectAccordians />
                    }
                />
                <Route
                    path="unit"
                    element={unit.name === "" ? null : <UnitAllInspects />}
                />
            </Routes>
        </div>
    );
}

export default InspectionsContainer;
