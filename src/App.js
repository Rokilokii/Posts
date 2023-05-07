import { React, useState, useMemo, useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    // <BrowserRouter>
    //   <Route path="/about">
    //     <About />
    //   </Route>
    //   <Route path="/posts">
    //     <Posts />n
    //   </Route>
    // </BrowserRouter>
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
