import logoName from "../assets/logo-name.png";

function WelcomeUser({ user }) {
    return (
        <div className="ts-primary-orange fw-bold text-center rounded">
            Hi {user.full_name}! Welcome to{" "}to your dashboard
            {/* <img src={logoName} alt="logo" id="logo-name" /> */}
        </div>
    );
}

export default WelcomeUser;
