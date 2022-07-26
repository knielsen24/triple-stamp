import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/HomePage/Footer";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setUser, login } from "./app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileHome from "./Components/ProfilePage/ProfileHome";
import PropertiesContainer from "./Components/ManagementPage/ManagementContainer";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(setUser);
    const navigate = useNavigate();

    const baseUrl = "http://localhost:4000";

    useEffect(() => {
        fetch(`${baseUrl}/me`).then((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(login(user)));
            } else {
                navigate("/");
            }
        });
    }, []);

    // useEffect(() => {
    //     fetch(`/users/${user.id}/properties`).then((r) => {
    //         if (r.ok) {
    //             r.json().then((r) => console.log(r));
    //         } else {
    //             navigate("/");
    //         }
    //     });
    // }, []);

    return (
        <div className="container-fluid p-0" id="app-main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : null}
                />
                <Route
                    path="/profile"
                    element={user ? <ProfileHome /> : null}
                />
                <Route
                    path="/management"
                    element={user ? <PropertiesContainer /> : null}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
