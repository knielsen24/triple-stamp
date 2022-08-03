function DashboardHome() {
    // ***** buttons or links to the following *****
    //  add property button
    //  add unit
    //  add inspection
    //  property all inspections
    //  upcoming inspections
    //  past inspections

    return (
        <div>
            <div className="row align-content-between">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Inspections </div>
                        <div className="card-body">
                            <h5 className="card-title">Today!</h5>
                            <p className="card-text">
                                looks like there are no inspections scheduled today
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go to inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 ">
                    <div className="card">
                        <div className="card-header">Inspections </div>
                        <div className="card-body">
                            <h5 className="card-title">This week</h5>
                            <p className="card-text">
                                start planning
                            </p>
                            <a href="#" className="btn btn-primary">
                                Checkout the schedule
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Forms </div>
                        <div className="card-body">
                            <h5 className="card-title">Create a new inspection</h5>
                            <p className="card-text">
                                looks like there are no inspections scheduled today
                            </p>
                            <a href="#" className="btn btn-primary">
                                Create Inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Forms </div>
                        <div className="card-body">
                            <h5 className="card-title">Add a new property</h5>
                            <p className="card-text">
                                Fill out details
                            </p>
                            <a href="#" className="btn btn-primary">
                                Add property
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;
