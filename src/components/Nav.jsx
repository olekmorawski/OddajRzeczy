import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../authContext";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="nav">
      <div className="auth_links">
        {isAuthenticated ? (
          <Link onClick={logout}>Sign Out</Link>
        ) : (
          <>
            <Link to="/login" onClick={() => setActiveLink("/login")}>
              Log in
            </Link>
            <Link to="/signup" onClick={() => setActiveLink("/signup")}>
              Sign up
            </Link>
          </>
        )}
      </div>
      <div className="nav_links">
        <Link
          to="/"
          onClick={() => setActiveLink("/")}
          className={activeLink === "/" ? "active" : ""}
        >
          Start
        </Link>
        <Link to="/">O co chodzi?</Link>
        <Link to="/">O nas</Link>
        <Link to="/">Fundacja i organizacje</Link>
        <Link to="/">Kontakt</Link>
      </div>
    </div>
  );
};

export default Nav;
