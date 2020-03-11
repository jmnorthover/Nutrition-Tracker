import React from 'react';
import Home from './Home';
import SearchResults from './SearchResults';
import Login from './Login';
import NotFound from './NotFound';
import { Route, Switch } from 'react-router-dom';

const Routing = ({ date, setDate, user, setUser }) => {
  return (
    <Switch>
      <Route exact path="/">
        {user !== false ? (
          <Home date={date} setDate={setDate} />
        ) : (
          <Login setUser={setUser} />
        )}
      </Route>
      <Route exact path="/search/:query">
        {user !== false ? (
          <SearchResults date={date} />
        ) : (
          <Login setUser={setUser} />
        )}
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routing;
