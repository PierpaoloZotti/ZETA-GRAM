import React from "react";
import "./Profile.css";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import PostSide from "../../components/postSide/PostSide";
import TweetSide from "../../components/tweetSide/TweetSide";
const Profile = () => {
   return (
      <section className="profile">
         <ProfileLeft />
         <div className="profileCenter">
            <ProfileCard />
            <PostSide />
         </div>
         <TweetSide />
      </section>
   );
};

export default Profile;
