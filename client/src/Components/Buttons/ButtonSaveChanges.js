import React from "react";

function ButtonSaveChanges({ isSubmitting }) {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            id="modal-btn-start-now"
            data-bs-dismiss="modal"
            aria-label="Close"
        >
            Save Changes
        </button>
    );
}

export default ButtonSaveChanges;
