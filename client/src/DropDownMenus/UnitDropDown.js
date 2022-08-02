import ButtonOpenDeleteUnitModal from "../Components/Buttons/ButtonOpenDeleteUnitModal";

function UnitDropDown() {
    return (
        <ul className="dropdown-menu bg-light ">
            <li>
                <a className="dropdown-item" href="/dashboard/inspections/unit">
                    View Inspections
                </a>
            </li>

            {/* <li>
                <a className="dropdown-item" href="#">
                    View Tasks
                </a>
            </li> */}
            <li>
                <a
                    className="dropdown-item"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-inspections-form"
                    href="#"
                >
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

export default UnitDropDown;
