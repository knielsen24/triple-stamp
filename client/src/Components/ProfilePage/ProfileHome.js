import "../../App.css";
import { useSelector } from "react-redux";
import { setUser } from "../../app/features/userSlice";

function ProfileHome() {
    const user = useSelector(setUser);
    return (
        <div class=" container align-content-items-center">
            <div id="profile-main-card-container" class="card mb-3">
                <div id="profile-card-bg">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="header text-center text-white">
                        <h5 class="card-title">{user.full_name}</h5>
                    </div>
                </div>

                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Account Name: {user.account_name}</li>
                        <li class="list-group-item">Email: {user.email}</li>
                        <li class="list-group-item">Phone: {user.phone} </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileHome;
