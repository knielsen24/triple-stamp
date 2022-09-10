import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../AccordianItems/UnitAllInspects";
import PropInspectAccordians from "./PropInspectAccordians";
import ViewInspectReport from "./ViewInspectReport";
import { setSelectInspection } from "../app/features/inspectionSlice";
import PropAllInspectsList from "../AccordianItems/PropAllInspectsList";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const unit = useSelector(setSelectUnit);
    const inspection = useSelector(setSelectInspection);

    const [tableHeight, setTableHeight] = useState(false);

    console.log(tableHeight)

    const buttonClass = "btn btn-secondary dash-main-btn text-white opacity-75";
    const buttonClassLists =
        "btn btn-secondary dash-main-btn text-white opacity-75 ";

    return (
        <div className="container border-endtext-center bg-white dash-page-container dash-page-mt overflow-auto ">
            <div className="row align-content-between mb-2 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            Add a new inspection to an unit
                        </div>
                        <div className="card-body">
                            {/* <p className="card-text">
                                Add a new inspection to an unit
                            </p> */}
                            <a
                                href="#"
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target="#add-inspection-form"
                            >
                                + Create New
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            View inspections list{" "}
                        </div>
                        <div className="card-body row">
                            {/* <p className="card-text">
                                Upcoming, in-progress, completed, and all
                            </p> */}
                            <div className="col justify-content-center">
                                <Link
                                    to="/dashboard/inspections/property"
                                    className={buttonClassLists}
                                    onClick={() => setTableHeight(false)}
                                >
                                    View by status
                                </Link>
                            </div>
                            <div className="col ">
                                <Link
                                    to="/dashboard/inspections/property/all"
                                    className={buttonClassLists}
                                    onClick={() => setTableHeight(true)}
                                >
                                    View All
                                </Link>
                            </div>
                            <div className="col"></div>
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
                        path="property/all"
                        element={property.name ? <PropAllInspectsList tableHeight={tableHeight} /> : null}
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
