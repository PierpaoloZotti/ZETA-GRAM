import React from "react";
import "./PostSide.css";
import PostShare from "../postShare/PostShare";
import PostSection from "../postSection/PostSection";

const PostSide = () => {
   return (
      <section className="flexCol postSide">
         <PostShare />
         <PostSection />
      </section>
   );
};

export default PostSide;
