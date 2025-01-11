import "./index.css";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="root-body">
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default Layout;
