import React from "react";

function Loading({ isLoading }) {
    if (isLoading) {
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>;
    }

    return <div></div>;
}

export default Loading;
