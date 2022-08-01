import cardOne from "../../assets/card1.png";
import cardTwo from "../../assets/card2.png";
import cardThree from "../../assets/card3.png";
import "../../App";

function BannerCardsContainer() {
    return (
        <div>
            <div
                className="container text-center py-5 px-auto"
                id="ban-cards-container"
            >
                <div className="row">
                    <div className="col px-2 mx-sm-auto">
                        <img
                            src={cardOne}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                    <div className="col px-2 mx-sm-auto">
                        <img
                            src={cardTwo}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                    <div className="col px-2 mx-sm-auto">
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

export default BannerCardsContainer;
