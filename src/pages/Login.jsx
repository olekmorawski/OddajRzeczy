import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/login`,
        formData
      );
      const success = response.status === 201;
      if (success) setIsLoginSuccessful(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isLoginSuccessful) {
      navigate("/");
    }
  }, [isLoginSuccessful]);

  return (
    <>
      <div className="login">
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
                value={FormData.email}
                onChange={handleChange}
              />
              <label className={"label-form"} htmlFor={"password"}>
                Password
              </label>
              <input
                type={"password"}
                id={"password"}
                name={"password"}
                value={FormData.password}
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="btns">
            <a href={"/signup"}>
              <button
                className={"login"}
                type={"button"}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </a>
            <button className={"submit"} type={"submit"} onClick={handleSubmit}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
