import "../../App.css";

function ButtonDeleteUser({ handleDeleteUser, id }) {
    return (
        <button
            type="button"
            id="profile-btn-delete-account"
            className="btn btn-primary text-white opacity-75"
            data-bs-dismiss="modal"
            onClick={() => handleDeleteUser(id)}
        >
            Delete my account
        </button>
    );
}

export default ButtonDeleteUser;
