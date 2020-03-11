import React, { useState, useEffect } from 'react';
import Routing from './Components/Routing';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('nutritionAppToken')) {
      setUser(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routing date={date} setDate={setDate} user={user} setUser={setUser} />
      </Router>
    </React.Fragment>
  );
};

export default App;
