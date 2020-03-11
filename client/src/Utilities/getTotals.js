// Used to get total nutritients for all four meals in a day

const reducer = (current, next) => {
  current.calories += next.food.calories * next.servings;
  current.protein += next.food.protein * next.servings;
  current.carbs += next.food.carbs * next.servings;
  current.fat += next.food.fat * next.servings;
  return current;
};

const getTotals = meals => {
  const start = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  meals.forEach(meal => meal.reduce(reducer, start));
  return start;
};

export default getTotals;
