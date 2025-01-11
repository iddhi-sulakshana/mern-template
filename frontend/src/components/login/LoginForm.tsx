function LoginForm() {
    return (
        <div className="flip-card__front">
            <div className="title">Log in</div>
            <form className="flip-card__form" action="">
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <button className="flip-card__btn">Let`s go!</button>
            </form>
        </div>
    );
}

export default LoginForm;
