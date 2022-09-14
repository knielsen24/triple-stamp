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
                <div className="text-center rounded-top " id="profile-card-bg">
                    <div className="bg-light rounded-top m-4 mb-0 p-2 justify-content-center">
                        <img
                            className="rounded-circle ts-primary-border-green"
                            src={!userImage ? profileIcon : user.image}
                            alt="profileIcon"
                            width="130px"
                        />
                    </div>
                    <div className="header bg-secondary mx-4 rounded-bottom text-center" >
                        <h5 className="card-title text-white p-2">
                            {!user ? "" : user.full_name}
                        </h5>
                    </div>
                </div>
                <div className="card-body p-1 mx-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 text-end">Email address:</div>
                                <div className="col-6 ">
                                    {!user ? "" : user.email}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 text-end">Phone number:</div>
                                <div className="col-6">
                                    {!user ? "" : user.phone}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 text-end">Business Name:</div>
                                <div className="col-6">
                                    {!user ? "" : user.business}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 text-end">
                                    Account Name:
                                </div>
                                <div className="col-6">
                                    {!user ? "" : user.account_name}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-white text-muted text-center mx-4">
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
