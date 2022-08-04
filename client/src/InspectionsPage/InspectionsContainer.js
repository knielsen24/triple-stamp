import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../AccordianItems/UnitAllInspects";
import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import EditModalTemp from "../Modals/EditModalTemp";
import PropInspectAccordians from "./PropInspectAccordians";
import ViewInspectReport from "./ViewInspectReport";
import { setSelectInspection } from "../app/features/inspectionSlice";
import { Link } from "react-router-dom";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const unit = useSelector(setSelectUnit);
    const inspection = useSelector(setSelectInspection);

    return (
        <div className="container border-endtext-center min-vh-100">
            <DeleteInspectionModal />
            <EditModalTemp
                modalId={"edit-inspection-form"}
                header={"Edit inspection information"}
                buttonText={"Click update to save changes"}
            />
            <div className="row align-content-between mb-4 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card">
                        <div className="card-header">Inspections </div>
                        <div className="card-body">
                            <h5 className="card-title">Today!</h5>
                            <p className="card-text">
                                looks like there are no inspections scheduled
                                today
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go to inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0 pe-3">
                    <div className="card">
                        <div className="card-header">Inspections </div>
                        <div className="card-body">
                            <h5 className="card-title">This week</h5>
                            <p className="card-text">start planning</p>
                            <Link
                                to="/dashboard/inspections/property"
                                className="btn btn-primary"
                            >
                                Checkout the schedule
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route
                    path="property"
                    element={property.name ? <PropInspectAccordians /> : null}
                />
                <Route
                    path="unit"
                    element={unit.name === "" ? null : <UnitAllInspects />}
                />
                <Route
                    path="reports"
                    element={
                        inspection.title === "" ? null : <ViewInspectReport />
                    }
                />
            </Routes>
        </div>
    );
}

export default InspectionsContainer;
