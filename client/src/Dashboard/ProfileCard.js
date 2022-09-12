import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import profileIcon from "../assets/person-icon.svg";

function ProfileCard() {
    const { data: user } = useFetchUserQuery();

    let userImage;
    if (user) {
        userImage = user.image;
    }

    return (
        <div className="container align-content-items-center rounded p-0 mt-3 shadow-sm dash-page-mt">
            <div className="card" id="profile-main-card-container">
                <div className="text-center bg-light" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            className="rounded-circle"
                            src={!userImage ? profileIcon : user.image}
                            alt="profileIcon"
                            width="115px"
                        />
                    </div>
                    <div className="header text-center">
                        <h5 className="card-title text-dark m-2 p-1">
                            {!user ? "" : user.full_name}
                        </h5>
                    </div>
                </div>

                <div className="card-body p-1">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item user-select-none">
                            <div className="row d-flex">
                                <div className="col-5 text-end">Email address:</div>
                                <div className="col-7">
                                    {!user ? "" : user.email}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item user-select-none">
                            <div className="row d-flex">
                                <div className="col-5 text-end">Phone number:</div>
                                <div className="col-7">
                                    {!user ? "" : user.phone}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item user-select-none">
                            <div className="row d-flex">
                                <div className="col-5 text-end">Business Name:</div>
                                <div className="col-7">
                                    {!user ? "" : user.business}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item user-select-none">
                            <div className="row d-flex">
                                <div className="col-5 text-end">
                                    Account Name:
                                </div>
                                <div className="col-7">
                                    {!user ? "" : user.account_name}
                                </div>
                            </div>
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
