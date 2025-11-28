// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";

export default function PrivateRoute({ children, requiredRole }) {
  const { isLoading, isAuthenticated, userRol } = useAuthCheck();

  if (isLoading) return <div>Cargando...</div>;

  if (!isAuthenticated) return <Navigate to="/login?session=none" replace />;
  console.log(requiredRole, userRol);
  if (requiredRole && userRol !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
