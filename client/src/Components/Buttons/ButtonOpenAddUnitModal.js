import plusIcon from "../../assets/plus-icon.svg";

function ButtonOpenAddUnitModal() {
    return (
        <button
            className="list-group-item list-group-item-action border border-0 "
            aria-current="true"
            data-bs-toggle="modal"
            data-bs-target="#add-unit-form"
        >
            <img
                src={plusIcon}
                alt="edit-icon"
                className="align-middle me-1 mb-1"
            />
            Add unit
        </button>
    );
}

export default ButtonOpenAddUnitModal;
