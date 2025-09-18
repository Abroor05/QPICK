import React from "react";
import "./SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="signInPage">
        <div className="container">
          <div className="signIn">
           <div className="allSign">
             <h1>Sign In</h1>

            <div className="inputs">
              <span>
                <input type="email" placeholder="Enter your email" />
              </span>

              <span>
                <input type="password" placeholder="Enter your password" />
              </span>

              <div className="Kirish">
                <button>
                  {" "}
                  <h4>Google</h4>
                  <FcGoogle />
                </button>

                <button>
                  {" "}
                  <h4>Facebook</h4>
                  <SiFacebook />
                </button>
              </div>

                <span className="Account">
                  <h4>Already have an account</h4>
                  <Link to={"/login"} >Login</Link>
                </span>

              <button className="signBtn" >Sign In</button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
