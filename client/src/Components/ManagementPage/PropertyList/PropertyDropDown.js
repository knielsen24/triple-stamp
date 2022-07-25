import React from "react";

function PropertyDropDown() {

    // need to fetch property data
    // map through property data to retrieve name for drop down menu
    // each a tag will render property details and units list

    return (
        <div>
            <p class="text-start">Property</p>
            <div class="dropdown">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Select Property
                </a>

                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PropertyDropDown;
