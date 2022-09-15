import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUnit } from "../app/features/unitSlice";
import { Route, Routes, Link } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import PropAllInspectsList from "../AccordianItems/PropAllInspectsList";
import StatusAccordians from "./StatusAccordians";
import TypeAccordians from "./TypeAccordians";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const dispatch = useDispatch();

    const [tableHeight, setTableHeight] = useState(false);

    const initialValues = {
        id: "",
        number: "",
        label: "",
        property_id: "",
        square_feet: "",
    };

    const shortcutBar = "btn py-0 text-secondary me-4";

    return (
        <div className=" container mt-3 border-endtext-center dash-page-container dash-page-mt overflow-auto ">
            <div className="row bg-white rounded border p-1 mb-2 shadow-sm">
                <div className="col d-flex justify-content-start">
                    <button
                        className="btn py-0 text-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-inspection-form"
                        onClick={() => dispatch(selectUnit(initialValues))}
                    >
                        + Add Inspection
                    </button>
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
                {/* <div>
                    <div className="w-auto ts-primary-green accent-trim-profile-card "></div>
                </div> */}
            </div>
            <div className="row">
                <Routes>
                    <Route
                        path="/"
                        element={property.name ? <StatusAccordians /> : null}
                    />
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
