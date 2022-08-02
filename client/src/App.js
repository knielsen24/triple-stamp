import DashboardContainer from "./Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/api/userApiSlice";
import ProfileHome from "./ProfilePage/ProfileHome";
import Footer from "./HomePage/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./HomePage/Home";
import { useSelector } from "react-redux";
import { setUser } from "./app/features/userSlice";
import { useFetchPropertiesQuery } from "./app/api/propertyApiSlice";
import { useState } from "react";

function App() {
    const navigate = useNavigate();
    const { data: user } = useFetchUserQuery();
    // const user = useSelector(setUser)

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
