import React from "react";
import "./PostSection.css";
import { Posts } from "../../data/PostsData";
import liked from "../../img/like.png";
import notLiked from "../../img/notlike.png";
const PostSection = () => {
   return (
      <section className="flexColCenter post-container">
         {Posts.map((post, index) => {
            return (
               <div className="paddings flexCol post">
                  <img src={post.img} alt={post.name} />
                  <div className="flexStart icons">
                     <img src={post.liked ? liked : notLiked} alt="" />
                     <img src={post.comment} alt="" />
                     <img src={post.share} alt="" />
                  </div>
                  <div className="p-likes">
                     <span style={{ color: "var(--gray)", fontSize: "14px" }}>
                        {post.likes} likes
                     </span>
                  </div>
                  <span className="primaryText">{post.name} </span>
                  <span>{post.desc}</span>
               </div>
            );
         })}
      </section>
   );
};

export default PostSection;
