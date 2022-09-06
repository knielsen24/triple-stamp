import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import searchIcon from "../assets/search-icon.svg";
import calendarIcon from "../assets/calendar-icon-org.svg";
import manageIcon from "../assets/manage-icon.svg";

function Home() {
    const iconClass = "icon-tiles";
    const iconDiv = "mb-3"

    return (
        <div>
            <div className="text-center p-1 home-container img-fluid shadow-sm ">
                <div className="d-flex flex-row align-self-center">
                    <div className="col">
                        <h5
                            className="text-white my-5 user-select-none "
                            id="ban-statement"
                        >
                            transforming real estate task management
                        </h5>{" "}
                    </div>
                </div>

                <div className="d-flex flex-row align-self-center align-items-center h-50">
                    <div className="col">
                        <ButtonStartNow />
                    </div>
                </div>
            </div>
            <div className="container mt-5 p-3 d-flex flex-row justify-content-around align-items-center">
                <div className="col text-center">
                    <div className={iconDiv} >
                        <img
                            className={iconClass}
                            src={calendarIcon}
                            alt="calendar icon"
                        />
                    </div>
                    <div>
                        <h5>Plan</h5>
                        <p>Maintain your planning schedule in real time</p>
                    </div>
                </div>
                <div className="col text-center">
                    <div className={iconDiv}>
                        <img
                            className={iconClass}
                            src={searchIcon}
                            alt="search icon"
                        />
                    </div>
                    <div>
                        <h5>Inspect</h5>
                        <p>Track and record all your inspections</p>
                    </div>
                </div>
                <div className="col text-center">
                    <div className={iconDiv}>
                        <img
                            className={iconClass}
                            src={manageIcon}
                            alt="manage-icon"
                        />
                    </div>
                    <div>
                        <h5 >Manage</h5>
                        <p>Manage your empire from start to finish</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
