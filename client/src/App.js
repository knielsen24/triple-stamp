import DashboardContainer from "./Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/api/userApiSlice";
import Footer from "./HomePage/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./HomePage/Home";
import Loading from "./Components/Loading";
import WelcomeUser from "./Dashboard/WelcomeUser";
import LoginModal from "./Login-Logout/LoginModal";
import SignUpModal from "./Modals/SignUpModal";

function App() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    return (
        <div className="container-fluid p-0 " id="app-main-container">
            {!user || isError ? <Navbar /> : null }
            <Loading isLoading={isLoading} />
            <Routes>
                <Route path="/" element={!user || isError ? <Home /> : null} />
                <Route
                    path="/dashboard/*"
                    element={!user || isError ? null : <DashboardContainer />}
                />
            </Routes>
            {!user || isError ? null : <WelcomeUser user={user} />}
            <Footer />
            <SignUpModal />
            <LoginModal />
        </div>
    );
}

export default App;
