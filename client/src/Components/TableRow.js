import React, { useEffect } from 'react';
import M from 'materialize-css';

const TableRow = ({ entry, deleteEntry, mealName }) => {
  useEffect(() => M.AutoInit(), []);
  return (
    <tr className="food-row">
      <td>{entry.food.name}</td>
      <td>{Math.round(entry.food.calories * entry.servings)}</td>
      <td>{Math.round(entry.food.protein * entry.servings)}g</td>
      <td>{Math.round(entry.food.carbs * entry.servings)}g</td>
      <td>{Math.round(entry.food.fat * entry.servings)}g</td>
      <td>{Math.round(entry.servings)}</td>
      <td>
        <i
          style={{ cursor: 'pointer' }}
          onClick={() => deleteEntry(entry._id, mealName.toLowerCase())}
          className="material-icons"
        >
          delete
        </i>
      </td>
    </tr>
  );
};

export default TableRow;
