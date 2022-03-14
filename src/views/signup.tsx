import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Navbar from "../components/navbar";
import "../styles/views/signup.scss";
import { emailRegex, passwordRexeg } from "../utils/regex";

interface FormValues {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  new_password: string;
  re_password: string;
}

function SignUpScreen() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const new_password_value = watch("new_password");

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <div className="app__signup">
        <div className="app__signup-wrapper">
          <h1 className="app__signup-title">CREATE AN ACCOUNT</h1>
          <form className="app__signup-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="app__signup-input"
              placeholder="First name"
              {...register("first_name", {
                required: "Please enter your first name",
              })}
            />
            {errors.first_name ? (
              <span className="app__signup-label_error">
                {errors.first_name.message}
              </span>
            ) : null}
            <input
              type="text"
              className="app__signup-input"
              placeholder="Last name"
              {...register("last_name", {
                required: "Please enter your last name",
              })}
            />
            {errors.last_name ? (
              <span className="app__signup-label_error">
                {errors.last_name.message}
              </span>
            ) : null}
            <input
              type="text"
              className="app__signup-input"
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
              className="app__signup-input"
              placeholder="Email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: emailRegex,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email ? (
              <span className="app__signup-label_error">
                {errors.email.message}
              </span>
            ) : null}
            <input
              className="app__signup-input"
              placeholder="Password"
              type="password"
              {...register("new_password", {
                required: "Please enter your new password",
                pattern: {
                  value: passwordRexeg,
                  message: "You need minimun special character e.g. !@#$%ˆ&*",
                },
                minLength: {
                  value: 6,
                  message: "Please enter 6 characters at least",
                },
              })}
            />
            {errors.new_password ? (
              <span className="app__signup-label_error">
                {errors.new_password.message}
              </span>
            ) : null}
            <input
              className="app__signup-input"
              placeholder="Confirm password"
              type="password"
              {...register("re_password", {
                required: "Please confirm your new password",
                validate: (value) =>
                  value === new_password_value || "The password does not match",
              })}
            />
            {errors.re_password ? (
              <span className="app__signup-label_error">
                {errors.re_password.message}
              </span>
            ) : null}
            <span className="app__signup-agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="app__signup-button">CREATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;
