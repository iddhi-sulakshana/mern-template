import { useAuth } from "../contexts/AuthContext";
import "./index.css";
import { Outlet } from "react-router-dom";

function Layout() {
    const context = useAuth();
    return (
        <div className="root-body">
            <header>
                {context?.token && (
                    <button type="button" onClick={context?.logout}>
                        Logout
                    </button>
                )}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default Layout;
