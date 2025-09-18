import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { SiFacebook } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  return (
    <>
        <div className="loginPage">
            <div className="container">
                <div className="login">
           <div className="allLogin">
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
                  <h4>Don't have account</h4>
                  <Link>Sign In</Link>
                </span>

              <button className="signBtn" >Login</button>
            </div>
           </div>
          </div>
            </div>
        </div>
    </>
  )
}

export default Login