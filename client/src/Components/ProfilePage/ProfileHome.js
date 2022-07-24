import "../../App.css";
import profileIcon from "../../assets/person-icon.svg";
import { useSelector } from "react-redux";
import { setUser } from "../../app/features/userSlice";
import DeleteProfileModal from "./DeleteProfileModal";
import EditProfileModal from "./updateForm/EditProfileModal";
import ButtonOpenEditModal from "../Buttons/ButtonOpenEditModal";
import ButtonOpenDeleteModal from "../Buttons/ButtonOpenDeleteModal";

function ProfileHome() {
    const user = useSelector(setUser);
    return (
        <div class=" container align-content-items-center">
            <div id="profile-main-card-container" class="card mb-3">
                <div class="text-center" id="profile-card-bg">
                    <div class="m-2 p-1">
                        <img
                            src={
                                user.img_profile
                                    ? user.img_profile
                                    : profileIcon
                            }
                            class="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div class="header text-center text-white">
                        <h5 class="card-title">{user.full_name}</h5>
                    </div>
                </div>

                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Account name: {user.account_name}
                        </li>
                        <li class="list-group-item">
                            Business: {user.business}{" "}
                        </li>
                        <li class="list-group-item">Email: {user.email}</li>
                        <li class="list-group-item">Phone: {user.phone} </li>
                    </ul>
                </div>
                <div class="card-footer bg-white text-muted text-center">
                    <ButtonOpenEditModal />
                    <ButtonOpenDeleteModal />
                </div>
                <EditProfileModal />
                <DeleteProfileModal />
            </div>
        </div>
    );
}

export default ProfileHome;
