import React from 'react';

const Heading = ({ 
  title, 
  text,
  tag = "h2", 
  className = "",
  textClassName = "" 
}) => {
  const TagName = tag;
  
  return (
    <div className={`max-w-[50rem] mx-auto mb-12 lg:mb-16 text-center ${className}`}>
      <TagName className={tag === "h2" ? "h2" : "h3"}>{title}</TagName>
      {text && <p className={`body-1 mt-4 text-n-3 ${textClassName}`}>{text}</p>}
    </div>
  );
};

export default Heading; 