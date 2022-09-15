import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import logo from "../assets/logo-svg.svg";

function RedirectToPropModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="redirect-prop-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="redirect-prop-modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light text-center ">
                            <img className="logo ms-1" src={logo} alt="logo" />
                            <h6
                                className="modal-title w-100"
                                id="redirect-prop-modal"
                            >
                                Oops! There is no property selected...
                            </h6>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body pt-1">
                            <div className="row d-flex justify-content-center">
                                <div className="col-5">
                                    <p className="my-2 text-center">
                                        Select a property from my property list
                                    </p>
                                    <div className="row  justify-content-center ">
                                        <button
                                            className="btn btn-light border btn-width mt-2 shadow-sm bg-gradient"
                                            data-bs-dismiss="modal"
                                        >
                                            Select Property
                                        </button>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <p className="my-2">or</p>
                                </div>
                                <div className="col-5 ">
                                    <p className="my-2 text-center">
                                        Add a new property before adding a unit
                                    </p>
                                    <div className="row justify-content-center">
                                        <button
                                            className="btn btn-secondary nav-btn-start-now mt-2 shadow-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-property-form"
                                        >
                                            + Add property
                                        </button>
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

export default RedirectToPropModal;
