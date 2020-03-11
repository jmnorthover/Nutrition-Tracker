import React, { useState } from 'react';
import M from 'materialize-css';
import { addEntry } from '../Services/requests';

const Result = ({ result, date }) => {
  const [servings, setServings] = useState(1);
  const [meal, setMeal] = useState('breakfast');

  const updateServings = e => {
    if (e.target.value >= 0) {
      setServings(e.target.value);
    }
  };

  const handleAdd = e => {
    e.preventDefault();

    addEntry({ servings, meal, ...result }, date).then(res => {
      console.log(res);
      M.toast({ html: 'Food added!' });
    });
  };

  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">keyboard_arrow_down</i>
        {result.name}
        <span className="brand-name"> ({result.brand})</span>
      </div>
      <div className="collapsible-body">
        <ul className="nutrition-info">
          <li>Calories: {Math.round(result.calories * (servings || 1))}</li>
          <li>Protein: {Math.round(result.protein * (servings || 1))}g</li>
          <li>Carbs: {Math.round(result.carbs * (servings || 1))}g</li>
          <li>Fat: {Math.round(result.fat * (servings || 1))}g</li>
        </ul>
        <div className="divider" />
        <form onSubmit={handleAdd}>
          <div className="row search-options">
            <div className="input-field col m2 s4">
              <span>Servings:</span>
              <input
                type="number"
                required
                value={servings}
                onChange={updateServings}
              />
            </div>
            <div className="input-field col m4 s8">
              <span>Meal:</span>
              <select
                required
                value={meal}
                onChange={e => setMeal(e.target.value)}
              >
                <option value="breakfast" className="r-option">
                  Breakfast
                </option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snack</option>
              </select>
            </div>
          </div>
          <div style={{ marginLeft: '1rem' }}>
            <button type="submit" className="waves-effect waves-light btn">
              Add Food
            </button>
          </div>
        </form>
      </div>
    </li>
  );
};

export default Result;
