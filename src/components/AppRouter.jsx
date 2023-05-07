import React, { useContext } from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/" element={<Navigate replace to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
