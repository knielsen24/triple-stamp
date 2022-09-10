import trashCanIcon from "../assets/trashcan-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

function UnitDropDown() {
    return (
        <ul className="dropdown-menu bg-light mt-4">
            {/* <li>
                <a className="dropdown-item" href="unit">
                    View Inspections
                </a>
            </li> */}
            <li>
                <a
                    className="dropdown-item"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-inspection-form"
                    href="#"
                >
                    <img
                        src={plusIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Add Inspection
                </a>
            </li>
            <li>
                <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#update-unit-form"
                >
                    <img
                        src={editIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Edit Information
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-unit-form"
                >
                    <img
                        src={trashCanIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Delete Unit
                </a>
            </li>
        </ul>
    );
}

export default UnitDropDown;
