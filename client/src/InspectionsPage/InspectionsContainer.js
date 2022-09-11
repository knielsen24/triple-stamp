import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../AccordianItems/UnitAllInspects";
import ViewInspectReport from "./ViewInspectReport";
import { setSelectInspection } from "../app/features/inspectionSlice";
import PropAllInspectsList from "../AccordianItems/PropAllInspectsList";
import StatusAccordians from "./StatusAccordians";
import TypeAccordians from "./TypeAccordians";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const unit = useSelector(setSelectUnit);
    const inspection = useSelector(setSelectInspection);

    const [tableHeight, setTableHeight] = useState(false);

    const buttonClass = "btn btn-secondary dash-main-btn text-white opacity-75";
    const buttonClassLists =
        "btn btn-secondary dash-main-btn text-white opacity-75 ";

    return (
        <div className="container border-endtext-center bg-white dash-page-container dash-page-mt overflow-auto ">
            <div className="row align-content-between mb-2 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            Add a new inspection
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
                                + Create
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            View inspections list by{" "}
                        </div>
                        <div className="card-body">
                            {/* <p className="card-text">
                                Upcoming, in-progress, completed, and all
                            </p> */}
                            <div className="row justify-content-between">
                                <div className="col">
                                    <Link
                                        to="status"
                                        className={buttonClassLists}
                                        onClick={() => setTableHeight(false)}
                                    >
                                        Status
                                    </Link>
                                </div>
                                <div className="col ">
                                    <Link
                                        to="type"
                                        className={buttonClassLists}
                                        onClick={() => setTableHeight(true)}
                                    >
                                        type
                                    </Link>
                                </div>
                                <div className="col ">
                                    <Link
                                        to="all"
                                        className={buttonClassLists}
                                        onClick={() => setTableHeight(true)}
                                    >
                                        All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Routes>
                    <Route
                        path="status"
                        element={property.name ? <StatusAccordians /> : null}
                    />
                    <Route
                        path="all"
                        element={
                            property.name ? (
                                <PropAllInspectsList
                                    tableHeight={tableHeight}
                                />
                            ) : null
                        }
                    />
                    <Route
                        path="type"
                        element={property.name ? <TypeAccordians /> : null}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default InspectionsContainer;
