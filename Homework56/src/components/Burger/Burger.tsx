import './Burger.css';
import React from 'react';

interface Props {
  classes: string[];
}
const Burger: React.FC<Props> = ({classes}) => {

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {classes.map((className, index) => (
        <div key={index} className={className}></div>
      ))}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;