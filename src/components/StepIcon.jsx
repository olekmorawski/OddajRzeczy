import React from "react";

const StepIcon = ({ imgSrc, altText, header, description }) => {
  return (
    <div className="steps_icon_conteiner">
      <div className="icon">
        <img src={imgSrc} alt={altText} />
      </div>
      <h2 className="icon_header">{header}</h2>
      <div className="icon_line"></div>
      <p className="icon_description">{description}</p>
    </div>
  );
};

export default StepIcon;
