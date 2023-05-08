import React, { useState } from "react";
import "./Auth.css";
import logo from "../../img/logo.svg";
import logoApp from "../../img/twitterZeta.svg";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";

const Auth = () => {
   const [isSignUp, setIsSignUp] = useState(false);
   const [passwordConfirm, setPasswordConfirm] = useState(true);
   const loading = useSelector((state) => state.authReducer.loading);
   const dispatch = useDispatch();
   const [data, setData] = useState({
      firstname: "",
      lastname: "",
      password: "",
      passwordConfirm: "",
   });

   //Handle the events to change the states of our variables
   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value }); //In this way I have created only one handle for all
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (isSignUp) {
         data.password === data.passwordConfirm
            ? dispatch(signUp(data))
            : setPasswordConfirm(false);
      } else {
         dispatch(logIn(data));
      }
   };
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

         <form className="r-auth" onSubmit={handleSubmit}>
            <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
            {isSignUp && (
               <div className="nameForm">
                  <input
                     className="inputForm"
                     type="text"
                     name="firstname"
                     id="name"
                     placeholder="First Name"
                     onChange={handleChange}
                  />
                  <input
                     className="inputForm"
                     type="text"
                     name="lastname"
                     id="lastname"
                     placeholder="Last Name"
                     onChange={handleChange}
                  />
               </div>
            )}

            <div className="username">
               <input
                  className="inputForm"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={handleChange}
               />
            </div>
            <div className="nameForm">
               <input
                  className="inputForm"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
               />
               {isSignUp && (
                  <input
                     className="inputForm"
                     type="password"
                     name="passwordConfirm"
                     id="passwordConfirm"
                     placeholder="Confirm Password"
                     onChange={handleChange}
                  />
               )}
            </div>
            <div className="flexColCenter footerForm">
               <button className="button" type="submit" disabled={loading}>
                  {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log in"}
               </button>
               {/*  {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"} */}
               {isSignUp && (
                  <span className="logIn-SignUp-switch" onClick={() => setIsSignUp(false)}>
                     Already have an account? <b>Sign In</b>
                  </span>
               )}
               {!isSignUp && (
                  <span className="logIn-SignUp-switch" onClick={() => setIsSignUp(true)}>
                     Don't have an account? <b>Sign Up</b>
                  </span>
               )}
            </div>
         </form>
      </section>
   );
};

export default Auth;
