import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import { setUser, login } from "./features/userSlice";
import UserModal from "./Components/NavBar/UserModal";
import { useSelector, useDispatch } from "react-redux";
import { useCreateUserMutation } from "./app/services/apiSlice"

function App() {

    const {data=[]} = useCreateUserMutation()
    console.log(data)

    const user = useSelector(setUser);
    const dispatch = useDispatch();


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
            <UserModal />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
