import React from "react";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
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
                                Welcome back to tripleStamp
                                <div>
                                    <p class="float-start" id="modal-subtext">
                                        Enter your login credentials
                                    </p>
                                </div>
                            </h5>
                            <ButtonCloseModalX />
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
