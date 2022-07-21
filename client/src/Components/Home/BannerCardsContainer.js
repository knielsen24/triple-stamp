import "../../App";
import cardOne from "../../assets/card1.png";
import cardTwo from "../../assets/card2.png";
import cardThree from "../../assets/card3.png";

function BannerCardsContainer() {
    return (
        <div>
            <div class="container text-center" id="ban-cards-container">
                <div className="row">
                    <div className="col">
                        <img
                            src={cardOne}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                    <div className="col">
                        {" "}
                        <img
                            src={cardTwo}
                            alt="banner icons"
                            id="banner-cards"
                        />
                    </div>
                    <div className="col">
                        {" "}
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
