import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Login from "./pages/login";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./pages/notFound";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
