
function ButtonSaveChanges({ isSubmitting, text, isValid }) {

    return (
        <button
            type="submit"
            disabled={isValid ? isSubmitting : true}
            className="btn btn-primary"
            id="modal-btn-start-now"
            data-bs-dismiss="modal"
            aria-label="Close"
        >
            {text}
        </button>
    );
}

export default ButtonSaveChanges;
