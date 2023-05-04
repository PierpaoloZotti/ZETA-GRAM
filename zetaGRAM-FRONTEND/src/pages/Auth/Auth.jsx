import React from "react";
import "./Auth.css";
import logo from "../../img/logo.svg";
import logoApp from "../../img/twitterZeta.svg";

const Auth = () => {
   return (
      <section className="auth">
         <div className="l-auth">
            <img src={logoApp} alt="" />
            <div className="logoAuth">
               <img src={logo} alt="" />
               <h3>Yet another social App</h3>
               <div className="gram">
                  <b>GRAM</b>
               </div>
            </div>
         </div>
         <SignUp />
      </section>
   );
};

function LogIn() {
   return (
      <div className="r-auth">
         <h2>Log In</h2>
         <div className="username">
            <input
               className="inputForm"
               type="text"
               name="username"
               id="username"
               placeholder="Username"
            />
         </div>
         <div className="nameForm">
            <input
               className="inputForm"
               type="password"
               name="password"
               id="password"
               placeholder="Password"
            />
         </div>
         <div className="flexColCenter footerForm">
            <button className="button">Sign In</button>
            <a href="">
               <span>
                  Yet Outside of Our Family? <b>Sign Up</b>
               </span>
            </a>
         </div>
      </div>
   );
}

function SignUp() {
   return (
      <div className="r-auth">
         <h2>Sign Up</h2>
         <div className="nameForm">
            <input
               className="inputForm"
               type="text"
               name="name"
               id="name"
               placeholder="First Name"
            />
            <input
               className="inputForm"
               type="text"
               name="surname"
               id="surname"
               placeholder="Last Name"
            />
         </div>
         <div className="username">
            <input
               className="inputForm"
               type="text"
               name="username"
               id="username"
               placeholder="Username"
            />
         </div>
         <div className="nameForm">
            <input
               className="inputForm"
               type="password"
               name="password"
               id="password"
               placeholder="Password"
            />
            <input
               className="inputForm"
               type="password"
               name="passwordConfirm"
               id="passwordConfirm"
               placeholder="Confirm Password"
            />
         </div>
         <div className="flexColCenter footerForm">
            <button className="button">Sign Up</button>
            <a href="">
               <span>
                  Already have an account? <b>Sign In</b>
               </span>
            </a>
         </div>
      </div>
   );
}

export default Auth;
