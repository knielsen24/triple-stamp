import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import cardOne from "../assets/card1.svg";
import cardTwo from "../assets/card2.svg";
import cardThree from "../assets/card3.svg";

function Home() {
    return (
        <div className="container text-center mt-4 home-container img-fluid bg-opacity-50 rounded-4">
            <div className="row">
                <h5
                    className="text-secondary my-5 user-select-none"
                    id="ban-statement"
                >
                    transforming real estate task management
                </h5>
            </div>
            <div className="row my-3"> </div>
            <div className="row my-3"> </div>
            <div
                className=" container text-center my-5 px-auto"
                id="ban-cards-container"
            >
                <div className="row mt-5">
                    <div className="col px-5  ">
                        <img
                            src={cardOne}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                    <div className="col px-5 ">
                        <img
                            src={cardTwo}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                    <div className="col px-5 ">
                        <img
                            src={cardThree}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                </div>
            </div>
            {/* <BannerCardsContainer /> */}
            <div className="m-5">
                <ButtonStartNow />
            </div>
        </div>
    );
}

export default Home;
