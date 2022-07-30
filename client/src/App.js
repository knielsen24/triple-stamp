import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/services/userApiSlice";
import ProfileHome from "./Components/ProfilePage/ProfileHome";
import Footer from "./Components/HomePage/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/HomePage/Home";
import { useSelector } from "react-redux";
import "./App.css";
import { setUser } from "./app/features/userSlice";
import { setSelectProperty } from "./app/features/propertySlice";


function App() {
    // const user = useSelector(setUser)
    // currentUser ? currentUser.id : ""
    const { data: user } = useFetchUserQuery();

    return (
        <div className="container-fluid p-0" id="app-main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
                <Route
                    path="/profile"
                    element={user ? <ProfileHome /> : null}
                />
                <Route
                    path="/dashboard/*"
                    element={user ? <DashboardContainer /> : null}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
