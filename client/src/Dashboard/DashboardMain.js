import { Link } from "react-router-dom";

function DashboardMain() {
    return (
        <div>
            <div className="row align-content-between mb-4 user-select-none">
                <div className="col-6 p-0 pe-3 ">
                    <div className="card">
                        <div className="card-header fw-bold">
                            Today's agenda
                        </div>
                        <div className="card-body">
                            <p className="card-text">Feature coming soon...</p>
                            <a
                                href="#"
                                className="btn bg-secondary text-white bg-opacity-75"
                            >
                                Go to inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="card">
                        <div className="card-header fw-bold">
                            View inspections
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Select your property to view
                            </p>
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
            <div className="row mb-4 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card">
                        <div className="card-header fw-bold">
                            Create a new inspection
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                looks like there are no inspections scheduled
                                today
                            </p>
                            <a
                                href="#"
                                className="btn bg-secondary text-white bg-opacity-75"
                                data-bs-toggle="modal"
                                data-bs-target="#add-inspection-form"
                            >
                                Create Inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="card">
                        <div className="card-header fw-bold">
                            Add a property to your portfolio{" "}
                        </div>
                        <div className="card-body">
                            <p className="card-text">Fill out details</p>
                            <a
                                href="#"
                                className="btn bg-secondary text-white bg-opacity-75"
                                data-bs-toggle="modal"
                                data-bs-target="#add-property-form"
                            >
                                Add property
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardMain;
