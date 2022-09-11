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

    const shortcutBar = "btn py-0 text-secondary me-4";

    return (
        <div className="container border-endtext-center bg-white dash-page-container dash-page-mt overflow-auto ">
            <div className="row bg-light rounded border p-1 mb-2 sticky-top">
                <div className="col d-flex justify-content-center">
                    <a
                        href="#"
                        className="btn py-0 text-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-inspection-form"
                    >
                        + Add Inspection
                    </a>
                </div>
                <div className="col d-flex justify-content-end">
                    Filter by:
                    {/* <input className="search p-0"></input>{" "} */}
                </div>
                <div className="col d-flex justify-content-start">
                    <Link
                        to="status"
                        className={shortcutBar}
                        onClick={() => setTableHeight(false)}
                    >
                        Status
                    </Link>
                    <Link
                        to="type"
                        className={shortcutBar}
                        onClick={() => setTableHeight(false)}
                    >
                        Type
                    </Link>
                    <Link
                        to="all"
                        className={shortcutBar}
                        onClick={() => setTableHeight(true)}
                    >
                        All
                    </Link>
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
