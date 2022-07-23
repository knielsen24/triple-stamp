import "../../App.css";
import ButtonStartNow from "../Buttons/ButtonStartNow";
import BannerCardsContainer from "./BannerCardsContainer";
import LoginModal from "./LoginModal";
import StartNowModal from "./StartNowModal";

function Home() {
    return (
        <div class="container-fluid">
            <div class="container text-center" id="home-ban">
                <header id="ban-statement">
                    transforming real estate task management
                </header>
                <BannerCardsContainer />
                <div class="m-sm-auto">
                    <ButtonStartNow />
                </div>
                <StartNowModal />
                <LoginModal />
            </div>
        </div>
    );
}

export default Home;
