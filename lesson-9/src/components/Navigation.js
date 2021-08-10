import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/register">register</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/dashboard">dashboard</Link>
      </li>
    </ul>
  );
};

export default Navigation;
