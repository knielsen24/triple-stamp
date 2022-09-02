import { useState } from "react";

function WelcomeUser({ user }) {
    <div
        class="toast align-items-center text-bg-primary border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
    >
        <div class="d-flex">
            <div class="toast-body">Hello, {user.full_name}! Welcome to your dashboard.</div>
            <button
                type="button"
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
            ></button>
        </div>
    </div>;
}

export default WelcomeUser;
