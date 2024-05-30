import React from 'react';
import './Ingredients.css';
import Ingredient from "../Ingredient/Ingredient.tsx";
import Count from "../Count/Count.tsx";
import Button from "../DeleteButton/Button.tsx";
import {IngredientCount, IngredientType} from "../../types.ts";

interface Props {
    INGREDIENTS: IngredientType[];
    addIngredient: (index: number) => void;
    ingredients: IngredientCount[];
    resetIngredient: (index: number) => void;
}

const Ingredients: React.FC<Props> = ({INGREDIENTS, addIngredient, ingredients, resetIngredient}) => {
    return (
        <div className="Ingredients">
            {INGREDIENTS.map((ingredient, index) => (
                <div key={index} className="ingredient-container">
                    <Ingredient
                        className="btn"
                        type="button"
                        name={ingredient.name}
                        image={ingredient.image}
                        onClick={() => addIngredient(index)}
                    />
                    <Count itemCount={ingredients[index].count}/>
                    <Button onClick={() => resetIngredient(index)}/>
                </div>
            ))}
        </div>
    );
};

export default Ingredients;