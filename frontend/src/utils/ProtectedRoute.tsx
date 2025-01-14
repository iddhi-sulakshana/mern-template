import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ isAuthenticated = false }) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export function UnProtectedRoute({ isAuthenticated = false }) {
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
