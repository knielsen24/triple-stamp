import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import SignUpForm from "../Forms/SignUpForm";
import logo from "../assets/logo-svg.svg";

function RedirectModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="redirect-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="redirect-modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light text-center ">
                            <img className="logo ms-1" src={logo} />
                            <h6
                                className="modal-title w-100"
                                id="redirect-modal"
                            >
                                Opps looks like no property has been selected...
                            </h6>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body pt-1">
                            <div className="row">
                                <div className="col text-center">
                                    <div className="row mt-0">
                                        <p className="my-2">
                                            Select a property from your my property list or add a new property
                                        </p>
                                    </div>
                                    <div className="row">
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

export default RedirectModal;
