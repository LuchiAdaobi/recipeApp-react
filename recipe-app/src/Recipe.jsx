import React from "react";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredients">
            {ingredient.text}
          </li>
        ))}
      </ol>
      <p className="calories">Calories: {calories}</p>
      <img src={image} alt="meal image" className="image" />
    </div>
  );
}
