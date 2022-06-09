import React from "react";
// import styles from "./input.module.css";

// const Input = ({ label, classWrapName, type, id, placeholder, className, name, onChange }) => {
//   return (
//     <div className={classWrapName}>
//       <label htmlFor={id} className="form-label">
//         {label}
//       </label>
//       <input type={type} id={id} className={className} placeholder={placeholder} name={name} onChange={onChange} />
//     </div>
//   );
// };

const Input = ({ label, classWrapName, id, classLabel, ...props }) => {
  return (
    <div className={classWrapName}>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <input id={id} style={{ border: props.border }} {...props} />
    </div>
  );
};

export default Input;
