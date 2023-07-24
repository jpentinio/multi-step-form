import React from "react";

const FormTitle = ({ title, text }) => {
  return (
    <div>
      <h1 style={{ color: "hsl(213, 96%, 18%)", fontWeight: "bold" }}>
        {title}
      </h1>
      <p style={{ color: "hsl(231, 11%, 63%)" }}>{text}</p>
    </div>
  );
};

export default FormTitle;
