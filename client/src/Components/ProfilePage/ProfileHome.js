import ButtonManageAccountModals from "../Buttons/ButtonManageAccountModals";
import { useFetchUserQuery } from "../../app/services/userApiSlice";
import DeleteProfileModal from "../Modals/DeleteProfileModal";
import EditProfileModal from "../Modals/EditProfileModal";
import profileIcon from "../../assets/person-icon.svg";
import "../../App.css";

function ProfileHome() {
    const { data: user } = useFetchUserQuery({
        refetchOnMountOrArgChange: true,
    });

    return (
        <div className="container align-content-items-center">
            <div id="profile-main-card-container" className="card m-3">
                <div className="text-center" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            src={user.img_profile ? user.image : profileIcon}
                            className="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div className="header text-center text-white">
                        <h5 className="card-title user-select-none">
                            {user.full_name}
                        </h5>
                    </div>
                </div>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item user-select-none">
                            Email: {user.email}
                        </li>
                        <li className="list-group-item user-select-none">
                            Phone: {user.phone}{" "}
                        </li>
                        <li className="list-group-item user-select-none">
                            Business: {user.business}{" "}
                        </li>
                        <li className="list-group-item user-select-none">
                            Account name: {user.account_name}
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
                <EditProfileModal />
                <DeleteProfileModal />
            </div>
        </div>
    );
}

export default ProfileHome;
