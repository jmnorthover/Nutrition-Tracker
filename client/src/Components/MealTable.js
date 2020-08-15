import React from 'react';
import TableRow from './TableRow';

const MealTable = ({ entries, deleteEntry, mealName }) => {
  return (
    <div>
      <table className="highlight centered responsive-table meal-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Servings</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <TableRow
              key={entry._id}
              entry={entry}
              deleteEntry={deleteEntry}
              mealName={mealName}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealTable;
