import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [role, setRole] = useState("Viewer");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login({ name: "Test User", role, token: "fake-jwt" });
  };

  return (
    <div>
      <select onChange={e => setRole(e.target.value)}>
        <option>Viewer</option>
        <option>Editor</option>
        <option>Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
