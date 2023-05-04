import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";
import TweetSide from "../../components/tweetSide/TweetSide";
const Home = () => {
   return (
      <section className="home">
         <ProfileSide />
         <PostSide />
         <TweetSide />
      </section>
   );
};

export default Home;
