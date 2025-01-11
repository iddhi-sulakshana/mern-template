import LoginForm from "../../components/login/LoginForm";
import SignUpForm from "../../components/login/SignUpForm";
import "./index.css";

function index() {
    return (
        /* From Uiverse.io by andrew-demchenk0 */
        <div className="wrapper">
            <div className="card-switch">
                <label className="switch">
                    <input type="checkbox" className="toggle" />
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

export default index;
