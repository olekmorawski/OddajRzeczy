import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="nav">
          <div className="nav_links">
            <div className="auth_links">
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
            <Link to="/">Start</Link>
            <Link to="/">O co chodzi?</Link>
            <Link to="/">O nas</Link>
            <Link to="/">Fundacja i organizacje</Link>
            <Link to="/">Kontakt</Link>
          </div>
        </div>
        <div className="header">
          <div className="text-and-buttons">
            <h1>Zacznij pomagac! Oddaj niechciane rzeczy w zaufane rece.</h1>
            <div className="buttons">
              <button>
                <span>ODDAJ RZECZY</span>
              </button>
              <button>
                <span>ZORGANIZUJ ZBIÓRKĘ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
