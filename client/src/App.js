import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setUser, login, logout } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useCreateUserMutation } from "./app/services/apiSlice";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
    const { data = [] } = useCreateUserMutation();
    console.log(data);

    const user = useSelector(setUser);
    const dispatch = useDispatch();

    // if (data) {
    //     dispatch(login(data))
    // }

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(login(user)));
            }
        });
    }, []);

    const handleLogout = () => {
        console.log("I was clicked");
        // fetch("/logout", { method: "DELETE" }).then((r) => {
        //     if (r.ok) {
        //         dispatch(logout(user));
        //     }
        // });
    };

    return (
        <div class="container" id="app-main-container">
            <Navbar handleLogout={handleLogout} />
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
