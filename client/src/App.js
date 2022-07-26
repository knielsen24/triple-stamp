import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/HomePage/Footer";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setUser, login } from "./app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileHome from "./Components/ProfilePage/ProfileHome";
import ManagementContainer from "./Components/ManagementPage/ManagementContainer";
import { useFetchUserQuery } from "./app/services/userApiSlice";

function App() {
    // const dispatch = useDispatch();
    // const user = useSelector(setUser);
    const navigate = useNavigate();
    // const [user, setUser] = useState(null)

    const { data = [], isLoading } = useFetchUserQuery();
    console.log(data)

    // const user = ({user, skip}:)

    return (
        <div className="container-fluid p-0" id="app-main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={!data ? <Home /> : null} />
                <Route
                    path="/dashboard"
                    element={data ? <Dashboard /> : null}
                />
                <Route
                    path="/profile"
                    element={data ? <ProfileHome /> : null}
                />
                <Route
                    path="/management"
                    element={data ? <ManagementContainer /> : null}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
