import plusIcon from "../../assets/plus-icon.svg";

function ButtonOpenAddPropertyModal() {
    return (
        <a
            className="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add-property-form"
        >
            <img
                src={plusIcon}
                alt="edit-icon"
                className="align-middle me-1 mb-1"
            />
            Add property
        </a>
    );
}

export default ButtonOpenAddPropertyModal;
