import { Link } from "react-router-dom";

function DashboardLinks() {
    return (
        <>
            <Link
                to="/dashboard/main"
                className="nav-link mx-5 btn"
                type="button"
                role="button"
            >
                Dashboard
            </Link>
        </>
    );
}

export default DashboardLinks;
