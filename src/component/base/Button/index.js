import React from "react";

// Tanpa destructuring dan spread operator
// const Button = ({ title, onClick, className, border }) => {
//   return (
//     <button className={className} style={{ border: { border } }} onClick={onClick}>
//       {title}
//     </button>
//   );
// };

const Button = ({ backgroundColor, border, children, ...props }) => {
  return (
    <button style={{ border: border, width: props.width, height: props.height, backgroundColor: backgroundColor, borderRadius: props.borderRadius, color: props.color }} {...props}>
      {children ? children : props.title}
    </button>
  );
};

Button.defaultProps = {
  border: "1px solid grey",
  // width: "123px",
};

export default Button;
