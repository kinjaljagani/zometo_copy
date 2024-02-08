import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    
      <div
        className={className}
        style={{
          ...style,
          background: "#B2AAA7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
        }}
        onClick={onClick}
      />
    
  );
};

export default NextArrow;
