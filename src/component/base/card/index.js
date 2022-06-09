import React from "react";

const Card = ({ className, children, ...props }) => {
  return <div className={className} style={{height: props.height}}>
    {children}
    </div>;
};

export default Card;
