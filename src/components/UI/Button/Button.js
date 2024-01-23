import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props.isValid,"is vaild")
  return (<div>
    <button type={props.type} className={`button ${!props.isValid ? 'isvalid' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>

  </div>
    
  );
};

export default Button;
