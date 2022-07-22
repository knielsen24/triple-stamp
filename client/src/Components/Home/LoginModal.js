import React from "react";
import LoginForm from "./LoginForm";

function LoginModal() {
    return (
        <div>
            <div
                class="modal fade"
                id="login-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="login-form"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="login-form">
                                Login into your tripleStamp account
                                <div>
                                    <p id="modal-subtext">
                                        {/* Start now - it's free. No credit card
                                        needed */}
                                    </p>
                                </div>
                            </h5>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
