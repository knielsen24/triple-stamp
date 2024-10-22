import DashboardContainer from "./Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/api/userApiSlice";
import Footer from "./HomePage/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./HomePage/Home";
import Loading from "./Components/Loading";
import LoginModal from "./Login-Logout/LoginModal";
import SignUpModal from "./Modals/SignUpModal";

function App() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    return (
        <div
            className="container-fluid p-0 position-relative vh-100 bg-light"
            // viewport-height="100vh"
            id="app-main-container"
        >
            <SignUpModal />
            <LoginModal />

            {!user || isError ? <Navbar /> : null}
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
