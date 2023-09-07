import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/user`, {
        formData,
      });
      const success = response.status === 200;

      if (success) navigate("/somepage"); // change this to propper page later
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

  return (
    <>
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              required={true}
              value={formData.email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="text"
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
