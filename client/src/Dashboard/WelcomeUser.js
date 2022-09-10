import { useState } from "react";

function WelcomeUser({ user }) {
    const [hideWelcome, setHideWelcome] = useState(true);

    if (hideWelcome) {
        return (
            <div className="ts-primary-orange fw-bold text-center rounded p-1 mb-2 shadow-sm">
                Hi {user.full_name}! Welcome to your dashboard.
                <button
                    type="button"
                    className="btn-close float-end pe-2"
                    onClick={() => setHideWelcome(false)}
                ></button>
            </div>
        );
    }

    if (!hideWelcome) {
        return <></>;
    }
}

export default WelcomeUser;
