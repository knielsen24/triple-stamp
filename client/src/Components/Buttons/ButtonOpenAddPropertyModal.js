import plusIcon from "../../assets/plus-icon.svg";

function ButtonOpenAddPropertyModal() {
    return (
        <button
            className="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target="#add-property-form"
        >
            <img
                src={plusIcon}
                alt="edit-icon"
                className="align-middle me-1 mb-1"
            />
            Add property
        </button>
    );
}

export default ButtonOpenAddPropertyModal;
