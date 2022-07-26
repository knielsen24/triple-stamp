import React from "react";

function ButtonSaveChanges({ isSubmitting, text }) {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
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
