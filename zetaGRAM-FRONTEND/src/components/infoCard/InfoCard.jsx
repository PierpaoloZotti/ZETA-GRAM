import React from "react";
import "./InfoCard.css";
import { BsPen } from "react-icons/bs";
import { useState } from "react";
import ProfileModal from "../profileModal/ProfileModal";

const InfoCard = () => {
   const [modalOpened, setModalOpened] = useState(false);
   return (
      <section className="paddings infoCard-container">
         <div className="infoHeader">
            <h3>Personal Infos</h3>
            <BsPen size={20} onClick={() => setModalOpened(true)} />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
         </div>
         <div className="info">
            <span>
               <b>Status </b>
            </span>
            <span>Married</span>
         </div>
         <div className="info">
            <span>
               <b>Lives in </b>
            </span>
            <span>Rio de Janeiro</span>
         </div>
         <div className="info">
            <span>
               <b>Works at </b>
            </span>
            <span>Zeta Designer</span>
         </div>
         <button className="primaryText button infoButton">Logout</button>
      </section>
   );
};

export default InfoCard;
