import React from "react";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import SignUpForm from "./SignUpForm";

function SignUpModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="start-now-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="start-now-modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="start-now-modal">
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
                        <div className="modal-body">
                            <SignUpForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
