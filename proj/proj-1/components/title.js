import React from "react";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <div class="section-title">
      <h2>
        {mainTitle} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
