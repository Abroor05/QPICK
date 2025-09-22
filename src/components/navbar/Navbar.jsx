import React from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginModal from "../loginModal/LoginModal";

function Navbar({ setLoginModal, loginModal }) {
  return (
    <>
      <div className="navBar">
        <div className="container">
          <div className="navLeft">
            <div className="logo">
              <Link to="/">
                <h1> QPICK</h1>
              </Link>
            </div>
            <div className="selectMobilePhone">
              <label for="phones">Telefon rusumini tanlang:</label>
              <select id="phones" name="phones">
                <option value="iphone">iPhone</option>
                <option value="samsung">Samsung</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="oppo">Oppo</option>
                <option value="vivo">Vivo</option>
                <option value="huawei">Huawei</option>
                <option value="realme">Realme</option>
                <option value="nokia">Nokia</option>
                <option value="oneplus">OnePlus</option>
                <option value="sony">Sony</option>
              </select>
            </div>
          </div>

          <div className="navRight">
            <div className="like">
              <Link to={"/like"} className="likeIcon">
                <FaRegHeart />
                <span className="likeCount">0</span>
              </Link>
            </div>

            <div className="cart">
              <Link to={"/cart"} className="cartIcon">
                <FiShoppingCart />
                <span className="cartCount">0</span>
              </Link>
            </div>

            <div className="navLogin">
              <Link onClick={() => setLoginModal((prev) => !prev)}>
                <FaUser />

                {loginModal ? (
                  <div className="loginModal">
                    <div className="littleModal">
                      <span>Login</span>
                      <span>Log out</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
