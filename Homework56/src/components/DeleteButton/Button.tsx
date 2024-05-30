import React from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({onClick}) => {
  return (
    <button className="deleteBtn" onClick={onClick}>Delete</button>
  );
};

export default Button;