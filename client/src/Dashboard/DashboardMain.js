import { Link } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { useSelector } from "react-redux";
import { setUnitsList } from "../app/features/unitsListSlice";

function DashboardMain() {
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    const handleTarget = (prop) => {
        if (prop.name === "") return "#redirect-prop-modal";
        if (prop.name !== "" && unitsListState.length < 1)
            return "#redirect-unit-modal";
        if (prop.name !== "" && unitsListState.length > 0)
            return "#add-inspection-form";
    };

    const buttonClass =
        "btn btn-secondary dash-main-btn text-white bg-gradient shadow-sm py-1";

    return (
        <div className="container dash-page-mt mt-3">
            <div className="row align-content-between mb-4 user-select-none">
                <div className="col-6 p-0 pe-3 h-100">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            View inspections
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Select your property to view
                            </p>
                            <Link
                                to="/dashboard/inspections/status"
                                className={buttonClass}
                            >
                                View list
                            </Link>
                        </div>
                    </div>
                    <div className="card mt-3 shadow-sm">
                        <div className="card-header fw-bold">
                            Create new inspection
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Add new an inspection to a unit
                            </p>
                            <button
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target={handleTarget(property)}
                            >
                                + Create new
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="card shadow-sm">
                        <div className="card-header fw-bold">
                            Add an unit to the property
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Add multiple units to your property
                            </p>
                            <button
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target={
                                    property.name === ""
                                        ? "#redirect-prop-modal"
                                        : "#add-unit-form"
                                }
                            >
                                + Add unit
                            </button>
                        </div>
                    </div>

                    <div className="card mt-3 shadow-sm">
                        <div className="card-header fw-bold">
                            Add a property to your portfolio{" "}
                        </div>
                        <div className="card-body">
                            <p className="card-text">Fill out details</p>
                            <button
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target="#add-property-form"
                            >
                                + Add property
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardMain;
