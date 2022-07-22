import "../../App.css";
import BannerCardsContainer from "./BannerCardsContainer";
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
                    <button
                        type="button"
                        id="nav-btn-start-now"
                        class="btn btn-primary m-sm-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#start-now-modal"
                    >
                        start now
                    </button>
                </div>
                <StartNowModal />


            </div>
        </div>
    );
}

export default Home;
