import React from "react";

const Plan = ({ title, date, activities }) => {
  return (
    <div className="content">
      <div className="content__wrapper flex flex-jc-sb flex-ai-c">
        <h3 className="content__title">{title}</h3>
        <p className="content__date">{date}</p>
      </div>
      <ul>
        {activities.map((activity, i) => {
          return <li key={i}>{activity}</li>;
        })}
      </ul>
    </div>
  );
};

export default Plan;
