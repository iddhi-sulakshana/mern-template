import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import Notification from "./utils/Notification";
import { HomePage, LoginPage, NotFoundPage } from "./pages";
import { useAuth } from "./contexts/AuthContext";
import { ProtectedRoute, UnProtectedRoute } from "./utils/ProtectedRoute";

function App() {
    const context = useAuth();
    console.log(context);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route
                        element={
                            <ProtectedRoute
                                isAuthenticated={context?.token ? true : false}
                            />
                        }
                    >
                        <Route index element={<HomePage />} />
                    </Route>
                    <Route
                        element={
                            <UnProtectedRoute
                                isAuthenticated={context?.token ? true : false}
                            />
                        }
                    >
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<LoginPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Route>
            </Routes>
            <Notification />
        </BrowserRouter>
    );
}

export default App;
