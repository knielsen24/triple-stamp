import React from "react";

function ManagementNav() {
    return (
        <div className="text-center mb-3">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Inspections
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Tasks
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">
                        Details
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ManagementNav;
