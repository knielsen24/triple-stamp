import DashboardContainer from "./Dashboard/DashboardContainer";
import { useFetchUserQuery } from "./app/api/userApiSlice";
import ProfileHome from "./ProfilePage/ProfileHome";
import Footer from "./HomePage/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./HomePage/Home";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "./app/features/userSlice";
import {useEffect} from "react"

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const user = useSelector(setUser);
    const { data: user, isError } = useFetchUserQuery()

    // useEffect(() => {
    //     fetch("/me")
    //     .then(dispatch(login(user)))
    // }, [])


    return (
        <div className="container-fluid p-0" id="app-main-container">
            <Navbar />
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
