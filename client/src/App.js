import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/services/userApiSlice";
import ProfileHome from "./Components/ProfilePage/ProfileHome";
import Footer from "./Components/HomePage/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/HomePage/Home";
import { useSelector } from "react-redux";
import { setUser } from "./app/features/userSlice";


function App() {
    const navigate = useNavigate()
    const { data: user } = useFetchUserQuery();

    // if (!user) {
    //     navigate("/")
    // }

    return (
        <div className="container-fluid p-0" id="app-main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
                <Route
                    path="/profile"
                    element={!user ? null : <ProfileHome />}
                />
                <Route
                    path="/dashboard/*"
                    element={!user ? null : <DashboardContainer />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
