import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/signup`,
        formData
      );
      const success = response.status === 201;
      if (success) setIsRegisterSuccessful(true);
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
    if (isRegisterSuccessful) {
      navigate("/");
    }
  }, [isRegisterSuccessful]);

  return (
    <>
      <div className="register">
        <Nav />
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              required={true}
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              required={true}
              value={formData.password}
              onChange={handleChange}
            />
          </section>
          <button type="submit" onSubmit={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
