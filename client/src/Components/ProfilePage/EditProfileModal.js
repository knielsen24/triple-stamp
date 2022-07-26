import ButtonCloseModalX from "../Buttons/ButtonCloseModalX"
import EditProfileForm from "./EditProfileForm";
import EditProfileForm2 from "./EditProfileForm2";


function EditProfileModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="update-profile-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="update-profile-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="update-profile-form">
                                Edit your profile information
                                <div>
                                    <p id="modal-subtext">
                                        Click save changes to update
                                    </p>
                                </div>
                            </h5>

                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                           {/* <EditProfileForm /> */}
                           <EditProfileForm2 />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileModal;
