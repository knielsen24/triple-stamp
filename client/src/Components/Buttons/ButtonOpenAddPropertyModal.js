
function ButtonOpenAddPropertyModal() {
    return (
        <a
            className="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add-property-form"
        >
            {/* add plus icon */}+ Add property
        </a>
    );
}

export default ButtonOpenAddPropertyModal;
