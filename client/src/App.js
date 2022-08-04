import DashboardContainer from "./Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/api/userApiSlice";
import ProfileHome from "./ProfilePage/ProfileHome";
import Footer from "./HomePage/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./HomePage/Home";

function App() {
    const { data: user, isError } = useFetchUserQuery();

    return (
        <div className="container-fluid p-0 " id="app-main-container">
            {!user || isError ? <Navbar /> : null}
   
            <Routes>
                <Route path="/" element={!user || isError ? <Home /> : null} />
                <Route
                    path="/profile"
                    element={!user || isError ? null : <ProfileHome />}
                />
                <Route
                    path="/dashboard/*"
                    element={!user || isError ? null : <DashboardContainer />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
