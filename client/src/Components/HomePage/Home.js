import "../../App.css";
import ButtonStartNow from "../Buttons/ButtonStartNow";
import BannerCardsContainer from "./BannerCardsContainer";
import LoginModal from "../Modals/LoginModal";
import SignUpModal from "../Modals/SignUpModal";

function Home() {
    return (
        <div className="container-fluid">
            <div className="container text-center" id="home-ban">
                <header id="ban-statement">
                    transforming real estate task management
                </header>
                <BannerCardsContainer />
                <div className="m-sm-auto">
                    <ButtonStartNow />
                </div>
                <SignUpModal />
                <LoginModal />
            </div>
        </div>
    );
}

export default Home;
