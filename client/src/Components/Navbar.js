import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('nutritionAppToken');
    setUser(false);
  };
  return (
    <nav className="blue-grey darken-3">
      <div className="nav-wrapper">
        <Link to="/">
          <div className="brand-logo left">
            <i className="material-icons">fitness_center</i>
            Nutrition Tracker
          </div>
        </Link>
        {user && (
          <div className="right logout" onClick={handleLogout}>
            Log Out
            <i className="material-icons">exit_to_app</i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
