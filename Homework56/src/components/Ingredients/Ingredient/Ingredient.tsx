import React from 'react';
import './Ingredient.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  className: string;
  name: string;
  image: string;
}

const Ingredient: React.FC<Props> = ({className, type, name, image}) => {
  return (
    <button type={type} className={className}>
      <img src={image} alt={name} className="img"/>
      <span className="ingredientName">{name}</span>
    </button>
  );
};

export default Ingredient;