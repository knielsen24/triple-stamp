import React from "react";

function PropertyNav() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Tasks
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Units
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Details
                </a>
            </li>
        </ul>
    );
}

export default PropertyNav;
