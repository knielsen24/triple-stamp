import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import cardOne from "../assets/card1.svg";
import cardTwo from "../assets/card2.svg";
import cardThree from "../assets/card3.svg";

function Home() {
    return (
        <div className="container text-center p-3 mt-4 home-container img-fluid shadow-sm ">
            <div className="row align-self-center">
                <div className="col">
                    <h5
                        className="text-secondary my-5 user-select-none"
                        id="ban-statement"
                    >
                        transforming real estate task management
                    </h5>{" "}
                </div>
            </div>

            <div className="row align-self-center align-items-end">
                <div className="col">
                    <ButtonStartNow />
                </div>
            </div>
        </div>
    );
}

export default Home;
