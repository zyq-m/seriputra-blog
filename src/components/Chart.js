import React from "react";

const Chart = ({ name, position, helper }) => {
  return (
    <li className="profile flex flex-ai-c">
      <div className={`profile__img ${helper}`}></div>
      <div className="profile__detail">
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    </li>
  );
};

export default Chart;
