import React from 'react';

export default function Ingredients({ measure }) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const measureKey = `strMeasure${i}`;
        const ingredientKey = `strIngredient${i}`;

        if (measure[measureKey] && measure[ingredientKey]) {
            ingredients.push(
                <li key={i}>
                    {measure[measureKey]} <span>{measure[ingredientKey]}</span>
                </li>
            );
        }
    }

    return <section className="py-5 text-sm font-light">{ingredients}</section>;
}
