import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import {
   UilScenery,
   UilPlayCircle,
   UilLocationPoint,
   UilSchedule,
   UilTimes,
} from "@iconscout/react-unicons";
const PostShare = () => {
   const [image, setImage] = useState(null);
   const imageRef = useRef();

   const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0];
         setImage({
            image: URL.createObjectURL(img),
         });
      }
   };

   return (
      <section className="paddings postShare">
         <img src={ProfileImage} alt="Profile" />
         <div className="FlexCol postShare-container">
            <input type="text" placeholder="What's happening?" />

            <div className="postOptions">
               <div className="option" onClick={() => imageRef.current.click()}>
                  <UilScenery />
                  <strong>Photo</strong>
               </div>
               <div className="option">
                  <UilPlayCircle />
                  <strong>Video</strong>
               </div>
               <div className="option">
                  <UilLocationPoint />
                  <strong>Location</strong>
               </div>
               <div className="option">
                  <UilSchedule />
                  <strong>Schedule</strong>
               </div>
               <button className="button">Share</button>
               <div style={{ display: "none" }}>
                  <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
               </div>
            </div>
            {image && (
               <div className="previewImage">
                  <UilTimes onClick={() => setImage(null)} />
                  <img src={image.image} alt="" />
               </div>
            )}
         </div>
      </section>
   );
};

export default PostShare;
