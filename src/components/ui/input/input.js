import React from 'react';

import { inputContainer, invalid, validationError } from './input.scss';

const Input = ({ label, changed, inputConfig, value, shouldValidate, touched}) => {
  let validationMessage = null;

  if (invalid && shouldValidate && touched) {
    validationMessage = (<span className={validationError}>Please enter a valid Value</span>)
  }
   return (
    <div className={inputContainer}>
      <label>{label}</label>
      <input onChange={changed} {...inputConfig} value={value}/>
      {validationMessage}
    </div>
  );
};

export default Input;
















// import React from 'react';

// // import classes from './Input.css';

// const Input = ({ onChange, type, value, label }) => {
//   let inputType = null;
//   // let inputsClasses = [classes.InputElement];
//   let validationMessage = null;
  
//    return (
//     // <div className={classes.Input}>
//     <div>
//       <label>{label}</label>
//       <input type={type} onChange={onChange} value={value}/>
//       {/* <input type={inputType} onChange={changed} {...elementConfig} className={inputsClasses.join(' ')} value={value}/> */}
//       {validationMessage}
//     </div>
//   );
// };

// export default Input;