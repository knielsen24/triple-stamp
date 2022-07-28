import "../../App.css";

function ButtonDeleteUnit({ handleDelete, id }) {
    return (
        <button
            type="button"
            id="profile-btn-delete-account"
            className="btn btn-primary text-white opacity-75"
            data-bs-dismiss="modal"
            onClick={() => handleDelete(id)}
        >
            Delete this property
        </button>
    );
}

export default ButtonDeleteUnit;
