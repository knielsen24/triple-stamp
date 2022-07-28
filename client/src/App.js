import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/HomePage/Footer";
import { Routes, Route } from "react-router-dom";
import ProfileHome from "./Components/ProfilePage/ProfileHome";
import ManagementContainer from "./Components/ManagementPage/ManagementContainer";
import { useFetchUserQuery } from "./app/services/userApiSlice";

function App() {
    const { data: user } = useFetchUserQuery({
        refetchOnMountOrArgChange: true,
    });
    // console.log(user);

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
                    path="/management/*"
                    element={user ? <ManagementContainer /> : null}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
