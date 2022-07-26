import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import EditProfileForm from "./EditProfileForm";


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
                                Edit your profile information
                                <div>
                                    <p id="modal-subtext">
                                        Click save changes to update
                                    </p>
                                </div>
                            </h5>

                            <ButtonCloseModalX />
                        </div>
                        <div class="modal-body">
                           <EditProfileForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileModal;
