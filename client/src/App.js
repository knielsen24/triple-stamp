import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setUser, login } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

    const user = useSelector(setUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(login(user)));
            }
        });
    }, []);


    return (
        <div class="container" id="app-main-container">
            <Navbar  />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : null}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
