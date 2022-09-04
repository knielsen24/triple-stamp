import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import LoginForm from "./LoginForm";
import { useState } from "react";
import logo from "../assets/logo-svg.svg";

function LoginModal() {
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmitError = (message) => {
        setErrorMessage(message);
    };

    return (
        <div>
            <div
                className="modal fade"
                id="login-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="login-form"
                aria-hidden={errorMessage ? "false" : "true"}
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light text-center">
                        <img className="logo ms-1" src={logo}/>
                            <h5
                                className="modal-title w-100"
                                id="start-now-modal"
                            >
                                Welcome to tripleStamp{" "}
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <LoginForm handleSubmitError={handleSubmitError} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
