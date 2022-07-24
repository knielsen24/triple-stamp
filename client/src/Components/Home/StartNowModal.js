import React from "react";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import SignUpForm from "./SignUpForm";

function StartNowModal() {
    return (
        <div>
            <div
                class="modal fade"
                id="start-now-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="start-now-modal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="start-now-modal">
                                Welcome to tripleStamp
                                <div>
                                    <p id="modal-subtext">
                                        Start now - it's free. No credit card
                                        needed
                                    </p>
                                </div>
                            </h5>

                            <ButtonCloseModalX />
                        </div>
                        <div class="modal-body">
                            <SignUpForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartNowModal;
