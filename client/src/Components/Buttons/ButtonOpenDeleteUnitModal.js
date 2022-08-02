
function ButtonOpenDeleteUnitModal() {
    return (
        <a
            className="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-unit-form"
        >
            {/* add plus icon */}Delete Unit
        </a>
    );
}

export default ButtonOpenDeleteUnitModal;
