import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { useAuth } from "../services/authContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const { login } = useAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/login`,
        formData
      );
      const success = response.status === 201;
      if (success) {
        setIsLoginSuccessful(true);
        login();
      }
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
        <Nav />
        <div className="login_body">
          <div className="login_text">Log in</div>
          <div className="login_box">
            <div className={"form2"}>
              <form
                className={"register-form"}
                onSubmit={handleSubmit}
                id="myForm"
              >
                <label
                  className={"label-form"}
                  htmlFor={"email"}
                  style={{ background: "#F0F1F1" }}
                >
                  E-mail
                </label>
                <input
                  name={"email"}
                  id={"email"}
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    background: "#F0F1F1",
                    borderBottom: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <label
                  className={"label-form"}
                  htmlFor={"password"}
                  style={{ background: "#F0F1F1" }}
                >
                  Password
                </label>
                <input
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    background: "#F0F1F1",
                    borderBottom: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
              </form>
            </div>
          </div>
          <div className="btns">
            <button
              className={"signup"}
              type={"button"}
              onClick={() => navigate("/signup")}
              style={{
                border: "1px solid black",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
            <button
              className={"submit"}
              type={"submit"}
              onClick={handleSubmit}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
