import './App.css'
import { useState } from 'react';
import IngredientsComponent  from "./Components/Ingredients.tsx";
import Burger from "./Components/Burger.tsx";


const INGREDIENTS = [
    { name: 'Cutlet', priceForOne: 50, className: 'cutlet' },
    { name: 'Cheese', priceForOne: 20, className: 'cheese' },
    { name: 'Lettuce Green', priceForOne: 10, className: 'lettuce-green' },
    { name: 'Bacon', priceForOne: 10, className: 'bacon' },
];

function App() {

    const [counts, setCounts] = useState(
        INGREDIENTS.map((ingredient) => ({ name: ingredient.name, count: 0 }))
    );

    const handleImageClick = (name: string) => {
        setCounts(prevCounts =>
            prevCounts.map(ingredient =>
                ingredient.name === name ? { ...ingredient, count: ingredient.count + 1 } : ingredient
            )
        );
    };

    const handleButtonClick = (name: string) => {
        setCounts(prevCounts =>
            prevCounts.map(ingredient =>
                ingredient.name === name && ingredient.count > 0 ? { ...ingredient, count: ingredient.count - 1 } : ingredient
            )
        );
    };

  return (
    <>
      <div className={'main-block'}>
          <IngredientsComponent counts={counts} onImageClick={handleImageClick} onButtonClick={handleButtonClick} />

          <Burger counts={counts} />
      </div>
    </>
  )
}

export default App
