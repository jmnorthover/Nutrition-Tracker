import React from 'react';
import MealTable from './MealTable';

const DisplayMeal = ({ mealName, mealItems, deleteEntry }) => {
  let content;

  if (!mealItems || mealItems.length === 0) {
    content = (
      <div>
        <em>No items added yet.</em>
      </div>
    );
  } else {
    content = (
      <MealTable
        mealName={mealName}
        entries={mealItems}
        deleteEntry={deleteEntry}
      />
    );
  }

  return (
    <div className="z-depth-1 meal-display">
      <h4>{mealName}</h4>
      {content}
    </div>
  );
};

export default DisplayMeal;
