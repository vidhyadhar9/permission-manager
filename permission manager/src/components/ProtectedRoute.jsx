import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, minRole }) {
  const { user } = useContext(AuthContext);

  const roleRank = { Admin: 3, Editor: 2, Viewer: 1 };

  if (!user) return <Navigate to="/login" />;

  if (minRole && roleRank[user.role] < roleRank[minRole])
    return <Navigate to="/dashboard" />;

  return children;
}
