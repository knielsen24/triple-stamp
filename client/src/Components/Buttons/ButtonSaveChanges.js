
function ButtonSaveChanges({ isSubmitting, text, isValid }) {

    return (
        <button
            type="submit"
            disabled={isValid ? isSubmitting : true}
            className="btn btn-secondary nav-btn-start-now shadow-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
        >
            {text}
        </button>
    );
}

export default ButtonSaveChanges;
