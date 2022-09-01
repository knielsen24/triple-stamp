import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import BannerCardsContainer from "./BannerCardsContainer";
import LoginModal from "../Login-Logout/LoginModal";
import SignUpModal from "../Modals/SignUpModal";

function Home() {
    return (
        <div className="container text-center mt-4" id="home-ban">
            <header className="user-select-none" id="ban-statement">
                transforming property task management
            </header>
            <BannerCardsContainer />
            <div className="m-sm-auto">
                <ButtonStartNow />
            </div>
            <SignUpModal />
            <LoginModal />
        </div>
    );
}

export default Home;
