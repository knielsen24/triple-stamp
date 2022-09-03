import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import DeleteProfileModal from "../Modals/DeleteProfileModal";
import profileIcon from "../assets/person-icon.svg";
import EditAddModal from "../Modals/EditAddModal";

function ProfileCard() {
    const { data: user } = useFetchUserQuery();

    let userImage;
    if (user) {
        userImage = user.image;
    }

    return (
        <div className="container align-content-items-center p-0 shadow-sm">
            <EditAddModal
                modalId={"update-profile-form"}
                header={"Edit your profile information"}
            />
            <DeleteProfileModal />
            <div className="card" id="profile-main-card-container">
                <div className="text-center bg-light" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            src={!userImage ? profileIcon : user.image}
                            // className="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div className="header text-center">
                        <h5 className="card-title text-dark m-2 p-1">
                            {!user ? "" : user.full_name}
                        </h5>
                    </div>
                </div>

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

export default ProfileCard;
