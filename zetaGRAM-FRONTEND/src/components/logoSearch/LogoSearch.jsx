import React from "react";
import Logo from "../../img/logo.png";
import { MdSearch } from "react-icons/md";
import "./LogoSearch.css";
const LogoSearch = () => {
   return (
      <section className="logoSearch-wrapper">
         <div className="flexCenter logoSearch-container">
            <img src={Logo} alt="logo" />
            <div className="flexCenter searchBar">
               <input type="text" name="searchBar" id="searchBar" placeholder="#Explore" />
               <div className="bSearch">
                  <MdSearch size={30} />
               </div>
            </div>
         </div>
      </section>
   );
};

export default LogoSearch;
