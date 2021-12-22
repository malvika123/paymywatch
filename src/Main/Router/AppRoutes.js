import { Link } from "react-router-dom";
import LocalRoutes from "./Routes";
export default function AppRoutes() {
  return (
    <div>
      <nav>
        <p>
          <Link to="/youtube">Youtube</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/register">Register</Link>
        </p>
        <p>
          <Link to="/registerbug">Register a bug</Link>
        </p>
      </nav>
      {<LocalRoutes />}
    </div>
  );
}
