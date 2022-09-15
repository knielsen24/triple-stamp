import trashCanIcon from "../assets/trashcan-icon.svg";
import editIcon from "../assets/edit-icon.svg";

function InspectionDropDown() {
    return (
        <ul className="dropdown-menu bg-light p-1 table-dropdown-zIndex">
            <li className="p-0">
                <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-inspection-form"
                >
                    <img
                        src={editIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Edit Inspection
                </button>
            </li>
            <li>
                <hr className="dropdown-divider mx-2 my-1" />
            </li>
            <li className="p-0">
                <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-inspections-modal"
                >
                    <img
                        src={trashCanIcon}
                        alt="trashcan-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Delete Inspection
                </button>
            </li>
        </ul>
    );
}

export default InspectionDropDown;
