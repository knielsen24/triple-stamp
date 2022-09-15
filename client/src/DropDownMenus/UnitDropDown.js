import trashCanIcon from "../assets/trashcan-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

function UnitDropDown() {
    return (
        <ul className="dropdown-menu bg-light mt-3 p-1">
            <li className="p-0">
                <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#add-inspection-form"
                >
                    <img
                        src={plusIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Add Inspection
                </button>
            </li>
            <li className="p-0">
                <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#update-unit-form"
                >
                    <img
                        src={editIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Edit Information
                </button>
            </li>
            <li>
                <hr className="dropdown-divider mx-2 my-1" />
            </li>
            <li className="p-0">
                <button
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
                </button>
            </li>
        </ul>
    );
}

export default UnitDropDown;
