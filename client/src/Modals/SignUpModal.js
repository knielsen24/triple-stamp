import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import SignUpForm from "../Forms/SignUpForm";
import logo from "../assets/logo-svg.svg";

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
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <img className="logo" src={logo}/>
                            <h5
                                className="modal-title user-select-none"
                                id="start-now-modal"
                            >
                                Welcome to tripleStamp{" "}
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body pt-1">
                            <div className="row">
                                <div className="col text-center">
                                    <div className="row mt-0">
                                        <p className="mb-3">
                                            Start now - it's free. No credit
                                            card needed
                                        </p>
                                    </div>
                                    <div className="row">
                                        <SignUpForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
