import axios from 'axios';
import { format } from 'date-fns';

const baseUrl = '/api';

// Get the user's entries for a particular date
export const getDay = date => {
  const fDate = format(date, 'yyyy-MM-dd');
  const token = window.localStorage.getItem('nutritionAppToken');
  return axios({
    method: 'get',
    url: `${baseUrl}/days/${fDate}`,
    headers: {
      Authorization: token,
    },
  }).then(res => res.data);
};

// Add an entry for a user to a particular date
export const addEntry = (foodInfo, date) => {
  const fDate = format(date, 'yyyy-MM-dd');
  const token = window.localStorage.getItem('nutritionAppToken');
  return axios({
    method: 'post',
    url: `${baseUrl}/entries`,
    headers: {
      Authorization: token,
    },
    data: {
      date: fDate,
      mealName: foodInfo.meal,
      foodInfo: {
        name: foodInfo.name,
        api_id: foodInfo.api_id,
        calories: foodInfo.calories,
        protein: foodInfo.protein,
        carbs: foodInfo.carbs,
        fat: foodInfo.fat,
        servings: foodInfo.servings,
      },
    },
  });
};

// Remove a user's entry
export const removeEntry = (id, date, mealName) => {
  const fDate = format(date, 'yyyy-MM-dd');
  const token = window.localStorage.getItem('nutritionAppToken');
  return axios({
    method: 'delete',
    url: `${baseUrl}/entries/${id}`,
    headers: {
      Authorization: token,
    },
    data: {
      date: fDate,
      mealName,
    },
  });
};

// Attempt to login with user credentials
export const loginUser = (username, password) => {
  return axios({
    method: 'post',
    url: `${baseUrl}/users/login`,
    data: {
      username,
      password,
    },
  });
};

// Attempt to register a new user with given credentials
export const registerUser = (username, password) => {
  return axios({
    method: 'post',
    url: `${baseUrl}/users/register`,
    data: {
      username,
      password,
    },
  });
};

// Get food search results for a particular query
export const foodSearch = query => {
  const token = window.localStorage.getItem('nutritionAppToken');
  return axios({
    method: 'get',
    url: `${baseUrl}/foodsearch/${query}`,
    headers: {
      Authorization: token,
    },
  }).then(response => {
    return response.data;
  });
};
