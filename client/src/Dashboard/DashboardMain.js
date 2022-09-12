import { Link } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { useSelector } from "react-redux"

function DashboardMain() {
    const property = useSelector(setSelectProperty);

    const buttonClass = "btn btn-secondary dash-main-btn text-white opacity-75 py-1";

    return (
        <div className="container dash-page-mt">
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
                            <a
                                href="#"
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target="#add-inspection-form"
                            >
                                + Create new
                            </a>
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
                            <a
                                href="#"
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target={property.name === "" ? "#redirect-modal" : "#add-unit-form"}
                            >
                                + Add unit
                            </a>
                        </div>
                    </div>

                    <div className="card mt-3 shadow-sm">
                        <div className="card-header fw-bold">
                            Add a property to your portfolio{" "}
                        </div>
                        <div className="card-body">
                            <p className="card-text">Fill out details</p>
                            <a
                                href="#"
                                className={buttonClass}
                                data-bs-toggle="modal"
                                data-bs-target="#add-property-form"
                            >
                                + Add property
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardMain;
