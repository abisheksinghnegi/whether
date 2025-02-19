import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="details-container">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default Details;
