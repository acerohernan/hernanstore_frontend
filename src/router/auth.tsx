import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export const NeedAuth = (Component: JSX.Element): JSX.Element => {
  const { isLogin } = useAppSelector((state) => state.user);

  if (!isLogin) return <Navigate to="/login" />;

  return <>{Component}</>;
};

export const VerifyAuth = (Component: JSX.Element): JSX.Element => {
  const { isLogin } = useAppSelector((state) => state.user);

  if (isLogin) return <Navigate to="/" />;

  return <>{Component}</>;
};
