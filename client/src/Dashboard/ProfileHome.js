import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import DeleteProfileModal from "../Modals/DeleteProfileModal";
import profileIcon from "../assets/person-icon.svg";
import EditModalTemp from "../Modals/EditModalTemp";

function ProfileHome() {
    const { data: user } = useFetchUserQuery();

    let userImage;
    if (user) {
        userImage = user.image;
    }

    return (
        <div className="container align-content-items-center">
            <div id="profile-main-card-container" className="card m-3">
                <div className="text-center" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            src={!userImage ? profileIcon : user.image}
                            className="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div className="header text-center text-white">
                        <h5 className="card-title user-select-none">
                            {!user ? "" : user.full_name}
                        </h5>
                    </div>
                </div>
                <EditModalTemp
                    modalId={"update-profile-form"}
                    header={"Edit your profile information"}
                    buttonText={"Click update to save changes"}
                />
                <DeleteProfileModal />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item user-select-none">
                            Email: {!user ? "" : user.email}
                        </li>
                        <li className="list-group-item user-select-none">
                            Phone: {!user ? "" : user.phone}
                        </li>
                        <li className="list-group-item user-select-none">
                            Business: {!user ? "" : user.business}
                        </li>
                        <li className="list-group-item user-select-none">
                            Account name: {!user ? "" : user.account_name}
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-white text-muted text-center">
                    <ButtonManageAccountModals
                        target={"#update-profile-form"}
                        text={"Edit Account"}
                    />
                    <ButtonManageAccountModals
                        target={"#delete-account-form"}
                        text={"Delete Account"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileHome;
