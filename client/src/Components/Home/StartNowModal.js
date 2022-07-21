import React from "react";

function StartNowModal() {
    return (
        <div>
            <div
                class="modal fade"
                id="startNowModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="startNowModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="startNowModalLabel">
                                Welcome to tripleStamp
                                <div>
                                    <p id="modal-subtext" >Start now - it's free.  No credit card needed</p>
                                </div>
                            </h5>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-primary"
                                id="modal-btn-start-now"
                            >
                                Finish Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartNowModal;
