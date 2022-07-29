import ManagementContainer from "./Components/ManagementPage/ManagementContainer";
import { useFetchUserQuery } from "./app/services/userApiSlice";
import ProfileHome from "./Components/ProfilePage/ProfileHome";
import Footer from "./Components/HomePage/Footer";
import { login } from "./app/features/userSlice";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/HomePage/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";


function App() {
    const dispatch = useDispatch()
    const { data: user } = useFetchUserQuery({
        refetchOnMountOrArgChange: true,
    });
    // useEffect(() => {
    //     dispatch(login(user))
    // }, [])


    return (
        <div className="container-fluid p-0" id="app-main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={!user ? <Home /> : null} />
                {/* <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : null}
                /> */}
                <Route
                    path="/profile"
                    element={user ? <ProfileHome /> : null}
                />
                <Route
                    path="/dashboard/*"
                    element={user ? <ManagementContainer /> : null}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
