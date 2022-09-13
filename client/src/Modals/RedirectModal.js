import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import logo from "../assets/logo-svg.svg";

function RedirectModal() {
    const buttonClass = "btn btn-secondary text-white opacity-75 py-1";
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
                            <div className="row d-flex justify-content-center">
                                <div className="col-5">
                                    <p className="my-2 text-center">
                                        Select a property from my property list
                                    </p>
                                    <div className="row justify-content-center ">
                                        <a
                                            type="button"
                                            className="btn btn-light border btn-width"
                                            data-bs-dismiss="modal"
                                        >
                                            Select Property
                                        </a>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <p className="my-2">or</p>
                                </div>
                                <div className="col-5 ">
                                    <p className="my-2 text-center">
                                        Add a new property before adding an unit
                                    </p>
                                    <div className="row justify-content-center">
                                        <a
                                            type="button"
                                            className="btn btn-secondary nav-btn-start-now shadow-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-property-form"
                                        >
                                            + Add property
                                        </a>
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
