import "../App.css";
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
                <button
                    type="button"
                    id="nav-btn-start-now"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#startNowModal"
                >
                    start now
                </button>
                <StartNowModal />
            </div>
        </div>
    );
}

export default Home;
