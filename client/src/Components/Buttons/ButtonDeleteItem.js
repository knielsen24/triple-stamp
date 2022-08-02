
function ButtonDeleteItem({ handleDelete, id, text }) {
    return (
        <button
            type="button"
            id="profile-btn-delete-account"
            className="btn btn-primary text-white opacity-75"
            data-bs-dismiss="modal"
            onClick={() => handleDelete(id)}
        >
            {text}
        </button>
    );
}

export default ButtonDeleteItem;
