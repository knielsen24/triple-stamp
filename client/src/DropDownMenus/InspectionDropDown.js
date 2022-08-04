import trashCanIcon from "../assets/trashcan-icon.svg";
import editIcon from "../assets/edit-icon.svg";

function InspectionDropDown() {
    return (
        <ul className="dropdown-menu bg-white ">
            <li>
                <a
                    className="dropdown-item"
                    href="#"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-inspection-form"
                >
                    <img
                        src={editIcon}
                        alt="edit-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Edit Inspection
                </a>
            </li>
            {/* <li>
                <a
                    className="dropdown-item"
                    href="#"
                    disable
                    // href="full_report"
                >
                    View Full Report
                </a>
            </li> */}
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <a
                    className="dropdown-item"
                    href="#"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-inspections-modal"
                >
                    <img
                        src={trashCanIcon}
                        alt="trashcan-icon"
                        className="align-middle me-3 mb-1"
                    />
                    Delete Inspection
                </a>
            </li>
        </ul>
    );
}

export default InspectionDropDown;
