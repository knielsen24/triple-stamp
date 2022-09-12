
function ButtonSaveChanges({ isSubmitting, text, isValid, handleReset }) {

    return (
        <button
            type="submit"
            disabled={isValid ? isSubmitting : true}
            className="btn btn-secondary nav-btn-start-now shadow-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={isValid && isSubmitting? handleReset : false}
        >
            {text}
        </button>
    );
}

export default ButtonSaveChanges;
