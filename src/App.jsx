import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signIn/SignIn";
import Login from "./pages/login/Login";
import OneProdact from "./components/oneProdact/OneProdact";

function App() {
  const [count, setCount] = useState(0);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar setLoginModal={setLoginModal} loginModal={loginModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/oneProdact" element={<OneProdact/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
