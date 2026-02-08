import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const roleRank = { Admin: 3, Editor: 2, Viewer: 1 };

export function usePermissionFilter(resources) {
  const { user } = useContext(AuthContext);

  if (!user) return [];

  return resources.filter(
    r => roleRank[user.role] >= roleRank[r.minRoleRequired]
  );
}
