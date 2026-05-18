import "./App.css";
import { useUser } from "./hooks/useUser";
export const App = () => {
  const { data, isLoading, error } = useUser();

  if (isLoading) return <h2 className="status">Loading...</h2>;
  if (error) return <h2 className="status error">Error occurred</h2>;

  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <div className="grid">
        {data?.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.image} alt={user.firstName} />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
            <p className="role">{user.company?.title}</p>
            <span className="age">Age: {user.age}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
