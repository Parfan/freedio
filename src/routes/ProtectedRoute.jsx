import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLogged, children }) {
  return !isLogged ? <Navigate to="/login" replace /> : children;
}

export default ProtectedRoute;
