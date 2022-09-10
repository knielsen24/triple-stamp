import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../AccordianItems/UnitAllInspects";
import PropInspectAccordians from "./PropInspectAccordians";
import ViewInspectReport from "./ViewInspectReport";
import { setSelectInspection } from "../app/features/inspectionSlice";
import { Link } from "react-router-dom";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const unit = useSelector(setSelectUnit);
    const inspection = useSelector(setSelectInspection);
    const buttonClass = "btn btn-secondary dash-main-btn text-white opacity-75";

    return (
        <div className="container border-endtext-center bg-white dash-page-container dash-page-mt overflow-auto">
            <div className="row align-content-between mb-3 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            Create a new inspection
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Add a new inspection to an unit
                            </p>
                            <a
                                href="#"
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target="#add-inspection-form"
                            >
                                Create Inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            View inspection lists{" "}
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Upcoming, in-progress, completed, and all
                            </p>
                            <Link
                                to="/dashboard/inspections/property"
                                className={buttonClass}
                            >
                                View list
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Routes>
                    <Route
                        path="property"
                        element={
                            property.name ? <PropInspectAccordians /> : null
                        }
                    />
                    <Route
                        path="unit"
                        element={unit.name === "" ? null : <UnitAllInspects />}
                    />
                    <Route
                        path="reports"
                        element={
                            inspection.title === "" ? null : (
                                <ViewInspectReport />
                            )
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default InspectionsContainer;
