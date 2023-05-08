import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
const ProfileCard = () => {
   const ProfilePage = true;
   return (
      <section className="profileCard-wrapper">
         <div className="flexColCenter profileCard-Container">
            <div className="profileCover">
               <img src={Cover} alt="Cover" />
               <div className="profilePic">
                  <img src={Profile} alt="Profile" />
               </div>
            </div>

            <span className="primaryText">Patricia Butler</span>
            <span>Senior UI/UX designer</span>
            <div className="flexCenter statsProfile">
               <div className="h-divider" />
               <div className="flexColCenter stat">
                  <span className="primaryText">6,866</span>
                  <span className="secondaryText">Followers</span>
               </div>
               <span className="v-divider" />
               <div className="flexColCenter stat">
                  <span className="primaryText">1</span>
                  <span className="secondaryText">Following</span>
               </div>
               {ProfilePage && (
                  <>
                     <div className="v-divider" />
                     <div className="flexColCenter stat">
                        <span className="primaryText">3</span>
                        <span className="secondaryText">Posts</span>
                     </div>
                  </>
               )}
               {ProfilePage ? "" : <div className="h-divider" />}
            </div>
            {ProfilePage ? "" : <span className="paddings myProfile primaryText">My Profile</span>}
         </div>
      </section>
   );
};

export default ProfileCard;
