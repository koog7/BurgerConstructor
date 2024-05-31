import React from 'react';
interface BurgerProps {
    counts: { name: string; count: number }[];
}
const Burger: React.FC<BurgerProps> = ({ counts }) => {

    const ingredients = counts.reduce<JSX.Element[]>((acc, ingredient) => {
        const ingredientName = ingredient.name.toLowerCase();
        for (let i = 0; i < ingredient.count; i++) {
            acc.push(
                <div key={`${ingredientName}-${i}`} className={ingredient.name}></div>
            );
        }
        return acc;
    }, []);

    const cutlet = counts.find(item => item.name === 'Cutlet')?.count || 0;
    const cheese = counts.find(item => item.name === 'Cheese')?.count || 0;
    const lettuceGreen = counts.find(item => item.name === 'Lettuce Green')?.count || 0;
    const bacon = counts.find(item => item.name === 'Bacon')?.count || 0;

    const totalPrice = 30 + (lettuceGreen * 10) + (cheese * 50) + (cutlet * 80) + (bacon * 60);

    return (
        <div>
            <fieldset>
                <legend>Burger</legend>
                <div className={'Burger'}>
                    <div className={'BreadTop'}>
                        <div className={'Seeds1'}></div>
                        <div className={'Seeds2'}></div>
                    </div>
                    {ingredients}
                    <div className="BreadBottom"></div>
                </div>
                <p>Price: ${totalPrice}</p>
            </fieldset>
        </div>
    );
};

export default Burger;