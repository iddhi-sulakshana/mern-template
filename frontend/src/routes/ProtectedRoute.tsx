import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated = false }) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
