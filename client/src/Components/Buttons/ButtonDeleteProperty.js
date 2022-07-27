import "../../App.css";

function ButtonDeleteProperty({ handleDeleteProperty, id }) {
    return (
        <button
            type="button"
            id="profile-btn-delete-account"
            className="btn btn-primary text-white opacity-75"
            data-bs-dismiss="modal"
            onClick={() => handleDeleteProperty(id)}
        >
            Delete this property
        </button>
    );
}

export default ButtonDeleteProperty;
