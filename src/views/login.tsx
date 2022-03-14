import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/views/login.scss";

interface FormValues {
  username: string;
  password: string;
}

function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <div className="app__login">
        <div className="app__login-wrapper">
          <h1 className="app__login-title">LOGIN</h1>
          <form className="app__login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="app__login-input"
              placeholder="Username"
              {...register("username", {
                required: "Please enter your username",
              })}
            />
            {errors.username ? (
              <span className="app__signup-label_error">
                {errors.username.message}
              </span>
            ) : null}
            <input
              type="password"
              className="app__login-input"
              placeholder="Password"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            {errors.password ? (
              <span className="app__signup-label_error">
                {errors.password.message}
              </span>
            ) : null}
            <button className="app__login-button">LOGIN</button>
            <Link className="app__login-link" to="/forgot-password">
              DO NOT YOU REMEBER THE PASSWORD?
            </Link>
            <Link className="app__login-link" to="/signup">
              CREATE A NEW ACCOUNT
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
