import ButtonCloseModalX from "../../Buttons/ButtonCloseModalX";


function EditProfileModal() {
    return (
        <div>
            <div
                class="modal fade"
                id="update-profile-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="update-profile-form"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="update-profile-form">
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
                        <div class="modal-body">
                            {/* <SignUpForm /> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileModal;
