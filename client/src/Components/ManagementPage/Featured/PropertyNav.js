import React from "react";

function PropertyNav() {
    return (
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                    Tasks
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Units
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Details
                </a>
            </li>
        </ul>
    );
}

export default PropertyNav;
