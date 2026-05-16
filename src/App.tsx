import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
