import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../AccordianItems/UnitAllInspects";
import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import EditModalTemp from "../Modals/EditModalTemp";
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
                buttonText={"Click update to save changes"}
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
