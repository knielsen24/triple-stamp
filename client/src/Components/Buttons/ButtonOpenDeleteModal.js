import React from "react";

function ButtonOpenDeleteModal() {
    return (
        <>
            <a
                class="nav-link "
                href="#"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#delete-account"
            >
                Delete Account
            </a>
        </>
    );
}

export default ButtonOpenDeleteModal;
