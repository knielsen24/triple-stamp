import { useState } from "react";

function WelcomeUser({ user }) {
    const [hideWelcome, setHideWelcome] = useState(true);

    const handleRemoveWelcome = () => setHideWelcome(false);

    if (hideWelcome) {
        return (
            <div className="ts-primary-orange fw-bold text-center rounded p-1 my-2">
                Hi {user.full_name}! Welcome to to your dashboard
                <button
                    type="button"
                    className="btn-close float-end pe-2"
                    onClick={handleRemoveWelcome}
                ></button>
            </div>
        );
    }

    if(!hideWelcome) {
        return <></>
    }
}

export default WelcomeUser;
