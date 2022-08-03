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
            <div class="row align-content-between">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">Inspections </div>
                        <div class="card-body">
                            <h5 class="card-title">Today!</h5>
                            <p class="card-text">
                                looks like there are no inspections scheduled today
                            </p>
                            <a href="#" class="btn btn-primary">
                                Go to inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-6 ">
                    <div class="card">
                        <div class="card-header">Inspections </div>
                        <div class="card-body">
                            <h5 class="card-title">This week</h5>
                            <p class="card-text">
                                start planning
                            </p>
                            <a href="#" class="btn btn-primary">
                                Checkout the schedule
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">Forms </div>
                        <div class="card-body">
                            <h5 class="card-title">Create a new inspection</h5>
                            <p class="card-text">
                                looks like there are no inspections scheduled today
                            </p>
                            <a href="#" class="btn btn-primary">
                                Create Inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">Forms </div>
                        <div class="card-body">
                            <h5 class="card-title">Add a new property</h5>
                            <p class="card-text">
                                Fill out details
                            </p>
                            <a href="#" class="btn btn-primary">
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
