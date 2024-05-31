import './App.css';
import {useState} from 'react';
import {IngredientCount, IngredientType} from './types.ts';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Ingredients from './components/Ingredients/Ingredients.tsx';
import Burger from './components/Burger/Burger.tsx';
import Price from './components/Price/Price.tsx';


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

  const [classes, setClasses] = useState<string[]>([]);

  const addIngredient = (index: number): void => {
    setIngredients((prevIngredients) => {
      return prevIngredients.map((ingredient, i) => {
        if (i === index) {
          return {...ingredient, count: ingredient.count + 1};
        }
        return ingredient;
      });
    });

    setClasses(prevClasses => {
      const newClasses = [...prevClasses];
      newClasses.push(INGREDIENTS[index].name);
      return newClasses;
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
    const ingredientName = INGREDIENTS[index].name;

    setClasses(prevClasses => {
      return prevClasses.filter(className => className !== ingredientName);
    });
  };

  const addTotalPrice = () => {
    return ingredients
    .filter((ingredient) => ingredient.count > 0)
    .reduce((acc, ingredient) => {
      const ingredientType = INGREDIENTS.find(item => item.name === ingredient.name);
      if (ingredientType) {
        return acc + (ingredientType.price * ingredient.count);
      }
      return acc;
    }, 30);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Ingredients</h2>
        <h2>Burger</h2>
      </div>
      <div className="container">
        <div className="ingredients-container">
          <Ingredients
            INGREDIENTS={INGREDIENTS}
            ingredients={ingredients}
            addIngredient={addIngredient}
            resetIngredient={resetIngredient}/>
        </div>
        <div className="burger-container">
          <Burger classes={classes}/>
          <Price addTotalPrice={addTotalPrice}/>
        </div>
      </div>
    </div>
  );
};

export default App;
