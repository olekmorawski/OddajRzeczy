import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");
  };

  return (
    <>
      <div className="registermain">
        <div className="top"> </div>
        <div className="bottom">
          <div className="make">Log in</div>
          <div className="jpg"></div>
          <div className={"form2"}>
            <form
              className={"register-form"}
              onSubmit={handleSubmit}
              id="myForm"
            >
              <label className={"label-form"} htmlFor={"email"}>
                E-mail
              </label>
              <input
                name={"email"}
                id={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={"label-form"} htmlFor={"password"}>
                Password
              </label>
              <input
                type={"password"}
                id={"password"}
                name={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </div>
          <div className="btns">
            <a href={"/register"}>
              {" "}
              <button className={"login"} type={"button"}>
                Sign Up
              </button>
            </a>
            <button className={"submit"} type={"submit"}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
