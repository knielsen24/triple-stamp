import "../../App.css";
import profileIcon from "../../assets/person-icon.svg";
import { useSelector } from "react-redux";
import { setUser } from "../../app/features/userSlice";
import DeleteProfileModal from "../Modals/DeleteProfileModal";
import EditProfileModal from "../Modals/EditProfileModal";
import ButtonManageAccountModals from "../Buttons/ButtonManageAccountModals";

function ProfileHome() {
    const user = useSelector(setUser);
    return (
        <div className="container align-content-items-center">
            <div id="profile-main-card-container" className="card m-3">
                <div className="text-center" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            src={
                                user.img_profile
                                    ? user.image
                                    : profileIcon
                            }
                            className="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div className="header text-center text-white">
                        <h5 className="card-title">{user.full_name}</h5>
                    </div>
                </div>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">Phone: {user.phone} </li>
                        <li className="list-group-item">
                            Business: {user.business}{" "}
                        </li>
                        <li className="list-group-item">
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
                        target={"#delete-account"}
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
