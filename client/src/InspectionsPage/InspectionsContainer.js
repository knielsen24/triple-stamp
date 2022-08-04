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
        <div className="container border-endtext-center min-vh-75 mt-2">
            <DeleteInspectionModal />
            <EditModalTemp
                modalId={"edit-inspection-form"}
                header={"Edit inspection information"}
                buttonText={"Click update to save changes"}
            />
            <div className="row align-content-between mb-4 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card">
                        <div className="card-header fw-bold">Scheduled Today </div>
                        <div className="card-body">
                            <p className="card-text">
                                Feature coming soon...
                            </p>
                            <a href="#" className="btn bg-secondary text-white bg-opacity-75" >
                                Go to inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0 ">
                    <div className="card">
                        <div className="card-header fw-bold">View scheduled lists </div>
                        <div className="card-body">
                            <p className="card-text">Upcoming, in-progress, completed, all</p>
                            <Link
                                to="/dashboard/inspections/property"
                                className="btn bg-secondary text-white bg-opacity-75"
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
