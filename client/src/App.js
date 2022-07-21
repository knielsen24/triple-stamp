import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";
import { login } from "./features/userSlice";

function App() {
    const user = useSelector(setUser);
    const dispatch = useDispatch();
    console.log(user);

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(login(user)));
            }
        });
    }, []);

    return (
        <div class="container" id="app-main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
