import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import ButtonOpenAddPropertyModal from "../Components/Buttons/ButtonOpenAddPropertyModal";

function DashboardMain() {
    // ***** buttons or links to the following *****
    //  add property button
    //  add unit
    //  add inspection
    //  property all inspections
    //  upcoming inspections
    //  past inspections

    return (
        <div>
            <div className="row align-content-between mb-4 user-select-none">
                <div className="col-6 p-0 pe-3 ">
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
                <div className="col-6 p-0">
                    <div className="card">
                        <div className="card-header">Inspections </div>
                        <div className="card-body">
                            <h5 className="card-title">This week</h5>
                            <p className="card-text">start planning</p>
                            <a href="#" className="btn btn-primary">
                                Checkout the schedule
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4 user-select-none">
                <div className="col-6 p-0 pe-3">
                    <div className="card">
                        <div className="card-header">Forms </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Create a new inspection
                            </h5>
                            <p className="card-text">
                                looks like there are no inspections scheduled
                                today
                            </p>
                            <a
                                href="#"
                                className="btn btn-primary"
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
                        <div className="card-header">Forms </div>
                        <div className="card-body">
                            <h5 className="card-title">Add a new property</h5>
                            <p className="card-text">Fill out details</p>
                            {/* <ButtonOpenAddPropertyModal /> */}
                            <a
                                href="#"
                                className="btn btn-primary"
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
