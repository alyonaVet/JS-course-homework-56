import React from 'react';
import './Ingredient.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  className: string;
  name: string;
  image: string;
  onClick: React.MouseEventHandler;
}

const Ingredient: React.FC<Props> = ({className, type, name, image, onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <img src={image} alt={name} className="img"/>
      <span className="ingredientName">{name}</span>
    </button>
  );
};

export default Ingredient;