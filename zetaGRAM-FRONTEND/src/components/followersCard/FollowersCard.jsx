import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../data/FollowersData";

const FollowersCard = () => {
   return (
      <section className="flexColStart follower-container">
         <h3>Who is following you</h3>
         {Followers.map((follower, index) => {
            return (
               <div className="flexCenter follower-card">
                  <div className="flexStart l-fcard">
                     <img src={follower.img} alt="profile pic" />
                     <div className="flexColStart f-details">
                        <span className="primaryText">{follower.name}</span>
                        <span className="secondaryText">{follower.username}</span>
                     </div>
                  </div>
                  <button className="button">Follow</button>
               </div>
            );
         })}
      </section>
   );
};

export default FollowersCard;
