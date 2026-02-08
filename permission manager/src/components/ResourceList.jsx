import ResourceItem from "./ResourceItem";

export default function ResourceList({
  title,
  resources,
  userRole,
  onStatusChange
}) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {resources.map(resource => (
          <ResourceItem
            key={resource.id}
            resource={resource}
            userRole={userRole}
            onStatusChange={onStatusChange}
          />
        ))}
      </ul>
    </>
  );
}
