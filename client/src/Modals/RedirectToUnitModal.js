import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import logo from "../assets/logo-svg.svg";

function RedirectToUnitModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="redirect-unit-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="redirect-unit-modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light text-center ">
                            <img className="logo ms-1" src={logo} alt="logo" />
                            <h6
                                className="modal-title w-100"
                                id="redirect-unit-modal"
                            >
                                Oops! There are no units listed
                            </h6>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body pt-1">
                            <div className="row d-flex justify-content-center">
                                <p className="my-2 text-center">
                                    Please add a unit to your property before
                                    adding an inspection
                                </p>
                                <div className="row mt-2 justify-content-center ">
                                    <button
                                        className="btn btn-light border btn-width shadow-sm me-3"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary nav-btn-start-now shadow-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-unit-form"
                                    >
                                        + Add unit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RedirectToUnitModal;
