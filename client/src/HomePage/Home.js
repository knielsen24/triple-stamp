import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import cardOne from "../assets/card1.svg";
import cardTwo from "../assets/card2.svg";
import cardThree from "../assets/card3.svg";

function Home() {
    return (
        <div className="text-center p-3 mt-4 home-container img-fluid shadow-sm ">
            <div className="row">
                <h5
                    className="text-secondary my-5 user-select-none"
                    id="ban-statement"
                >
                    transforming real estate task management
                </h5>
            </div>

            <div className="m-5">
                <ButtonStartNow />
            </div>
            <div className="row my-5"> </div>
            <div className="row my-5"> </div>
            <div className="row my-5"> </div>
            <div
                className="container text-center my-5 px-auto"
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
        </div>
    );
}

export default Home;
