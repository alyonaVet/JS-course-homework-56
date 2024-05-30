import './App.css';
import {useState} from 'react';
import {IngredientCount, IngredientType} from './types.ts';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Ingredients from './components/Ingredients/Ingredients.tsx';


const App = () => {
  const INGREDIENTS: IngredientType[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];

  const [ingredients, setIngredients] = useState<IngredientCount[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (index: number): void => {
    setIngredients((prevIngredients) => {
      return prevIngredients.map((ingredient, i) => {
        if (i === index) {
          return {...ingredient, count: ingredient.count + 1};
        }
        return ingredient;
      });
    });
  };

  const resetIngredient = (index: number): void => {
    setIngredients((prevIngredients) => {
      return prevIngredients.map((ingredient, i) => {
        if (i === index) {
          return {...ingredient, count: 0};
        }
        return ingredient;
      });
    });
  };



  return (
    <div className="App">
      <div className="ingredients-container">
        <Ingredients
          INGREDIENTS={INGREDIENTS}
          ingredients={ingredients}
          addIngredient={addIngredient}
          resetIngredient={resetIngredient}/>
      </div>
    </div>
  )
};

export default App;
