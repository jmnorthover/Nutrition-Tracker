import React, { useState } from 'react';

const Modal = ({ setToday, today }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [meal, setMeal] = useState('0');

  const handleSubmit = e => {
    e.preventDefault();

    const updatedToday = [...today];

    updatedToday[meal].food.push({
      name: foodName,
      calories,
      protein,
      carbs,
      fat
    });
    
    setToday(updatedToday);
  }

  return (
      <div id="modal1" className="modal">
        <div className="modal-content center-align">
          <h4>Add food:</h4>
          <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>

              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="food-name">Food name:</label>
                  <input 
                    required id="food-name"
                    type="text"
                    value={foodName}
                    onChange={e => setFoodName(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12 m6">
                  <label htmlFor="calories">Calories:</label>
                  <input required id="calories" type="number" onChange={e => setCalories(e.target.value)}/>
                </div>
                <div className="input-field col s12 m6">
                  <label htmlFor="protein">Protein (grams):</label>
                  <input 
                    required 
                    id="protein"
                    type="number"
                    value={protein}
                    onChange={e => setProtein(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12 m6">
                  <label htmlFor="carbs">Carbs (grams):</label>
                  <input 
                    required
                    id="carbs"
                    type="number"
                    value={carbs}
                    onChange={e => setCarbs(e.target.value)}
                  />
                </div>
                <div className="input-field col s12 m6">
                  <label htmlFor="fat">Fat (grams):</label>
                  <input 
                    required
                    id="fat"
                    type="number"
                    value={fat}
                    onChange={e => setFat(e.target.value)}/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <select required value={meal} onChange={e => setMeal(e.target.value)}>
                    <option value="0">Breakfast</option>
                    <option value="1">Lunch</option>
                    <option value="2">Dinner</option>
                    <option value="3">Snack</option>
                  </select>
                  <label>Meal</label>
                </div>
              </div>

              <button type="submit" className="waves-effect waves-light btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Modal;
