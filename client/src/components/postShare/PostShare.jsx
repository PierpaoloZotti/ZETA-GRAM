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
import { useSelector } from "react-redux";

const PostShare = () => {
   const [image, setImage] = useState(null);
   const imageRef = useRef();
   const { user } = useSelector((state) => state.authReducer.authData);
   const desc = useRef();
   const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0];
         setImage(img);
      }
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
         userId: user._id,
         desc: desc.current.value,
      };
      if (image) {
         const data = new FormData();
         const filename = Date.now() + image.name;
      }
   };

   return (
      <section className="paddings postShare">
         <img src={ProfileImage} alt="Profile" />
         <div className="FlexCol postShare-container">
            <input ref={desc} required type="text" placeholder="What's happening?" />

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
               <button className="button" onClick={handleSubmit}>
                  Share
               </button>
               <div style={{ display: "none" }}>
                  <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
               </div>
            </div>
            {image && (
               <div className="previewImage">
                  <UilTimes onClick={() => setImage(null)} />
                  <img src={URL.createObjectURL(image)} alt="" />
               </div>
            )}
         </div>
      </section>
   );
};

export default PostShare;
