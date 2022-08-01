import ButtonOpenDeleteUnitModal from "../Buttons/ButtonOpenDeleteUnitModal";
import editIcon from "../../assets/edit-icon.svg";

function InspectionsDropDown() {
    return (
        <ul className="dropdown-menu bg-light ">
            <li>
                <a
                    className="dropdown-item"
                    href="/dashboard/inspections/unit"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-inspections-form"
                >
                    {" "}
                    Edit Inspection {" " + " "}
                    <img src={editIcon} alt="edit-icon" />
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    View Tasks
                </a>
            </li>
            <li>
                <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#update-unit-form"
                >
                    Edit Information
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <ButtonOpenDeleteUnitModal />
            </li>
        </ul>
    );
}

export default InspectionsDropDown;
