function ButtonOpenAddUnitModal() {
    return (
        <button
            className="list-group-item list-group-item-action border border-0"
            aria-current="true"
            data-bs-toggle="modal"
            data-bs-target="#add-unit-form"
        >
            {/* add plus icon */}+ add unit
        </button>
    );
}

export default ButtonOpenAddUnitModal;
