import React, { useState } from "react";
import loginImg from "../components/assets/login-test.png";
import logo from "../components/assets/logo-test.png";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    localStorage.setItem("isLoggingin", JSON.stringify({ email, password }));
    setEmail("");
    setPassword("");
    window.location.href = "/dashboard";
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type={showPassword ? "test" : "password"}
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>show</span>
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
