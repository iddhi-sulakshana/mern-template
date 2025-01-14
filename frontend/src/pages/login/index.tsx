import { useEffect, useState } from "react";
import LoginForm from "../../components/login/LoginForm";
import SignUpForm from "../../components/login/SignUpForm";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const [toggle, setToggle] = useState(false);
    // get the url
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname.includes("/login")) {
            setToggle(false);
        } else if (location.pathname.includes("/signup")) {
            setToggle(true);
        }
    }, [location]);

    useEffect(() => {
        if (toggle) {
            navigate("/signup");
        } else {
            navigate("/login");
        }
    }, [toggle]);

    return (
        /* From Uiverse.io by andrew-demchenk0 */
        <div className="wrapper">
            <div className="card-switch">
                <label className="switch">
                    <input
                        type="checkbox"
                        className="toggle"
                        // @ts-ignore
                        value={toggle}
                        onChange={() => setToggle(!toggle)}
                    />
                    <span className="slider"></span>
                    <span className="card-side"></span>
                    <div className="flip-card__inner">
                        <LoginForm />
                        <SignUpForm />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Login;
