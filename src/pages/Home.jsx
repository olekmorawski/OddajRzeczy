import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="nav">
          <div className="nav_links">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/">Start</Link>
            <Link to="/">O co chodzi?</Link>
            <Link to="/">O nas</Link>
            <Link to="/">Fundacja i organizacje</Link>
            <Link to="/">Kontakt</Link>
          </div>
        </div>
        <div className="header">
          <h1>Zacznij pomagac! Oddaj niechciane rzeczy w zaufane rece.</h1>
          <div className="buttons">
          <button>ODDAJ RZECZY</button>
          <button>ZORGANIZUJ ZBIORKE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
