import React, { useState, useEffect } from 'react';
import DisplayMeal from './DisplayMeal';
import SearchForm from './SearchForm';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { format } from 'date-fns';
import M from 'materialize-css';
import { getDay, removeEntry } from '../Services/requests';
import getTotals from '../Utilities/getTotals';

const Home = ({ date, setDate }) => {
  const [day, setDay] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => M.AutoInit(), []);

  useEffect(() => {
    getDay(date)
      .then(data => setDay(data))
      .catch(error => console.error('Failed to fetch data'));
  }, [date]);

  const deleteEntry = (id, mealName) => {
    const updatedDay = { ...day };
    updatedDay[mealName] = day[mealName].filter(entry => entry._id !== id);
    setDay(updatedDay);
    removeEntry(id, date, mealName).then(res => console.log(res.data.message));
  };

  const totals = getTotals(Object.values(day));

  return (
    <div className="container center-align">
      <div className="home-header">
        <div className="date-info">
          <h3>{format(date, 'MMMM do')}</h3>
          <button
            className="btn-floating btn-large waves-effect waves-light calendar-button"
            onClick={() => setVisible(!visible)}
          >
            <i className="material-icons">date_range</i>
          </button>
        </div>
        {visible && (
          <div>
            <DayPicker
              month={date}
              selectedDays={date}
              onDayClick={day => {
                setDate(day);
                console.log(day);
              }}
            />
          </div>
        )}
        <div className="food-search">
          <SearchForm />
        </div>
      </div>
      <div className="divider" />
      <div>
        <div className="totals">
          <div>Calories: {totals.calories}</div>
          <div>Protein: {totals.protein}g</div>
          <div>Carbs: {totals.carbs}g</div>
          <div>Fat: {totals.fat}g</div>
        </div>
        <DisplayMeal
          mealName="Breakfast"
          mealItems={day.breakfast}
          deleteEntry={deleteEntry}
        />
        <DisplayMeal
          mealName="Lunch"
          mealItems={day.lunch}
          deleteEntry={deleteEntry}
        />
        <DisplayMeal
          mealName="Dinner"
          mealItems={day.dinner}
          deleteEntry={deleteEntry}
        />
        <DisplayMeal
          mealName="Snacks"
          mealItems={day.snacks}
          deleteEntry={deleteEntry}
        />
      </div>
    </div>
  );
};

export default Home;
