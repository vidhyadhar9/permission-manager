import { useEffect, useState, useContext } from "react";
import { resources as mockData } from "../data/resources";
import { AuthContext } from "../context/AuthContext";
import ResourceList from "../components/ResourceList";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setResources(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  // 🔥 Immutable nested update
  const toggleStatus = id => {
    setResources(prev =>
      prev.map(r =>
        r.id === id
          ? { ...r, status: r.status === "active" ? "archived" : "active" }
          : r
      )
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ResourceList
        title="Active Resources"
        resources={resources.filter(r => r.status === "active")}
        userRole={user.role}
        onStatusChange={toggleStatus}
      />

      <ResourceList
        title="Archived Resources"
        resources={resources.filter(r => r.status === "archived")}
        userRole={user.role}
        onStatusChange={toggleStatus}
      />
    </div>
  );
}
