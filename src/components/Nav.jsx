import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../services/authContext";

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
        <ScrollLink
          to="oCoChodziSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          O co chodzi?
        </ScrollLink>
        <ScrollLink
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          O nas
        </ScrollLink>
        <ScrollLink
          to="organizacjeSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Fundacja i organizacje
        </ScrollLink>
        <ScrollLink
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Kontakt
        </ScrollLink>
      </div>
    </div>
  );
};

export default Nav;
