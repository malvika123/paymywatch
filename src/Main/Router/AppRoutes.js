import About from "../About/About";
import Youtube from "../Youtube/Youtube";
import { Route, Routes, Link } from "react-router-dom";
import Login from "../Login/login.connect";
import RegisterBug from "../RegisterBug/RegisterBug.connect";
import Register from "../Register/Register.connect";
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
      <Routes>
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/registerbug" element={<RegisterBug />} />
      </Routes>
    </div>
  );
}
