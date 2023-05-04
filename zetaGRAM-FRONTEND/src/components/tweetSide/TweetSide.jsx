import React, { useState } from "react";
import "./TweetSide.css";
import { RiHome6Fill } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { BsChatSquareDots } from "react-icons/bs";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";
const TweetSide = () => {
   const [modalOpened, setModalOpened] = useState(false);
   return (
      <section className="tweetSide">
         <div className="nav">
            <RiHome6Fill size={32} />
            <BsGear size={32} />
            <RiNotification3Line size={32} />
            <BsChatSquareDots size={32} />
         </div>
         <TrendCard />
         <button className="button bTweet" onClick={() => setModalOpened(true)}>
            Share
         </button>
         <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </section>
   );
};

export default TweetSide;
