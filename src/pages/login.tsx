import React, { useState } from "react";
import loginImg from "../components/assets/login-test.png";
import logo from "../components/assets/logo-test.png";
export default function Login() {
  type inputs = {
    email: string;
    password: string;
  };
  const [formInput, setFormInput] = useState<inputs>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setFormInput((prev: inputs) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formInput);
    setFormInput({ email: "", password: "" });
  };

  return (
    <section className="login">
      <div className="login-left">
        <header>
          <img src={logo} alt="" />
        </header>
        <img className="login-img" src={loginImg} alt="" />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formInput.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formInput.password}
              onChange={handleChange}
              required
            />
            <span>show</span>
          </div>
          <div className="login-bottom">
            <span>FORGOT PASSWORD?</span>
            <button type="submit">LOG IN</button>
          </div>
        </form>
      </div>
    </section>
  );
}
