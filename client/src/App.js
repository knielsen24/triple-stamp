import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setUser, login } from "./app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileHome from "./Components/ProfilePage/ProfileHome";

function App() {
    const user = useSelector(setUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(login(user)));
            } else {
                navigate("/");
            }
        });
    }, []);

    return (
        <div class="container p-0" id="app-main-container">
            <Navbar />
            <hr class="border border-2" />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : null}
                />
                <Route path="/profile" element={user ? <ProfileHome /> : null } />
            </Routes>
            <hr class="border border-2" />
            <Footer />
        </div>
    );
}

export default App;
