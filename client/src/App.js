import DashboardContainer from "./Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/api/userApiSlice";
import Footer from "./HomePage/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./HomePage/Home";
import Loading from "./Components/Loading";
import WelcomeUser from "./Components/WelcomeUser";

function App() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    const handleWelcomeMessage = () => {
        setTimeout(() => console.log("Hello, World!"), 3000)

    }

    if (user || !isError) {
        handleWelcomeMessage()
    }


    return (
        <div className="container-fluid p-0 " id="app-main-container">
            {!user || isError ? <Navbar /> : <WelcomeUser user={user} />}
            <Loading isLoading={isLoading} />
            <Routes>
                <Route path="/" element={!user || isError ? <Home /> : null} />
                <Route
                    path="/dashboard/*"
                    element={!user || isError ? null : <DashboardContainer />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
