import trashCanIcon from "../assets/trashcan-icon.svg";
import editIcon from "../assets/edit-icon.svg";

function InspectionDropDown() {
    return (
        <ul className="dropdown-menu bg-light ">
            <li>
                <a
                    className="dropdown-item"
                    href="#"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-inspections-form"
                >
                    {" "}
                    Edit Inspection {" " + " "}
                    <img src={editIcon} alt="edit-icon" />
                </a>
            </li>
            <li>
                <a
                    className="dropdown-item"
                    href="full_report"
                    // data-bs-toggle="modal"
                    // data-bs-target="#"
                >
                    View Full Report
                </a>
            </li>
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
                    Delete Inspection {" " + " "}
                    <img src={trashCanIcon} alt="trashcan-icon" />
                </a>
            </li>
        </ul>
    );
}

export default InspectionDropDown;
