import ButtonOpenDeleteUnitModal from "../Buttons/ButtonOpenDeleteUnitModal";

function UnitDropDown() {
    const renderDropDownItems = [];

    return (
        <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                    View Inspections
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

export default UnitDropDown;
