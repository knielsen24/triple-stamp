import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import LoginForm from "./LoginForm";

function LoginModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="login-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="login-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title user-select-none" id="login-form">
                                Welcome back to tripleStamp
                                <div>
                                    <p className="float-start" id="modal-subtext">
                                        Enter your login credentials
                                    </p>
                                </div>
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
