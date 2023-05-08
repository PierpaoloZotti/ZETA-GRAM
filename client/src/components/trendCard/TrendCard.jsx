import React from "react";
import "./TrendCard.css";
import { Trends } from "../../data/TrendsData";

const TrendCard = () => {
   return (
      <section className="paddings trendCard">
         <h2>Trend for you</h2>
         {Trends.map((trend, index) => {
            return (
               <div className="flexColStart trend">
                  <span className="primaryText">#{trend.title}</span>
                  <span>{trend.share}k likes</span>
               </div>
            );
         })}
      </section>
   );
};

export default TrendCard;
