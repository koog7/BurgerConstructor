import React from 'react';
import cutlet from '/src/assets/cutlet.png';
import cheese from '/src/assets/cheese.png';
import lettuceGreen from '/src/assets/lettuce-green.png';
import bacon from '/src/assets/bacon.png';

interface Ingredient {
    name: string;
    priceForOne: number;
    img: string;
    className: string;
}

interface IngredientsProps {
    counts: { name: string; count: number }[];
    onImageClick: (name: string) => void;
    onButtonClick: (name: string) => void;
}

const INGREDIENTS: Ingredient[] = [
    { name: 'Cutlet', priceForOne: 50, img: cutlet, className: 'cutlet' },
    { name: 'Cheese', priceForOne: 20, img: cheese, className: 'cheese' },
    { name: 'Lettuce Green', priceForOne: 10, img: lettuceGreen, className: 'lettuce-green' },
    { name: 'Bacon', priceForOne: 10, img: bacon, className: 'bacon' },
];

const IngredientsComponent: React.FC<IngredientsProps> = ({ counts, onImageClick, onButtonClick }) => {
    return (
        <div>
            <fieldset>
                <legend>Ingredients</legend>
                {INGREDIENTS.map((ingredient) => (
                    <div className={ingredient.className} key={ingredient.name}>
                        <a href="#" onClick={() => onImageClick(ingredient.name)}>
                            <img src={ingredient.img} alt={ingredient.name} width="90px"/>
                        </a>
                        <p className={'ingredient'}>{ingredient.name}</p>
                        <p>{counts.find(item => item.name === ingredient.name)?.count || 0}x</p>
                        <button onClick={() => onButtonClick(ingredient.name)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                                <path
                                    fill="white"
                                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </fieldset>
        </div>
    );
};

export default IngredientsComponent;
