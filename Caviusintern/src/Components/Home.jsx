import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="maincontainer">
        <div className="container">
        <h1>USER LIST</h1>
        <input
            type="text"
            placeholder="Search users..."
            className="search-box"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <div className="user-list">
            {users
            .filter((user) => user.name.toLowerCase().includes(search))
            .map((user) => (
                <div key={user.id} className="user-card">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <Link to={`/item/${user.id}`} className="details-link">
                    View Details
                </Link>
                </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Home;
