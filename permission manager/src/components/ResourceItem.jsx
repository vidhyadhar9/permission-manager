const roleHierarchy = {
  Admin: 3,
  Editor: 2,
  Viewer: 1
};

export default function ResourceItem({ resource, userRole, onStatusChange }) {
  const hasAccess =
    roleHierarchy[userRole] >= roleHierarchy[resource.minRoleRequired];

  return (
    <li>
      {resource.name}
      {!hasAccess && " 🔒"}

      {hasAccess && (
        <>
          <button onClick={() => onStatusChange(resource.id)}>
            Toggle Status
          </button>

          {userRole === "Admin" && <button>Delete</button>}
        </>
      )}
    </li>
  );
}
