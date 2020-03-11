import React, { useEffect, useState } from 'react';
import { loginUser, registerUser } from '../Services/requests';
import M from 'materialize-css';

const Login = ({ setUser }) => {
  useEffect(() => M.AutoInit(), []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [register, setRegister] = useState(false);

  const submitInfo = async e => {
    e.preventDefault();
    try {
      let res;
      if (register) {
        res = await registerUser(username, password);
      } else {
        res = await loginUser(username, password);
      }
      window.localStorage.setItem('nutritionAppToken', res.data.token);
      setUser(true);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Login service is currently down');
      }
    }
  };

  return (
    <div className="container center-align">
      <div className="z-depth-1 login-form">
        <div>
          <i className="material-icons medium">account_circle</i>
          <h4>{register ? 'Register' : 'Sign In'}</h4>
        </div>
        {errorMessage && <div className="login-error">{errorMessage}</div>}
        <form className="row" onSubmit={submitInfo}>
          <div className="input-field col s12">
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              minLength="6"
              maxLength="30"
            />
            <label htmlFor="username">Username:</label>
          </div>
          <div className="input-field col s12">
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength="6"
              maxLength="30"
            />
            <label htmlFor="password">Password:</label>
          </div>
          <div className="col s12">
            <button
              className="btn waves-effect waves-light login-button"
              type="submit"
            >
              {register ? 'Register' : 'Sign In'}
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={() => {
              setRegister(!register);
              setUsername('');
              setPassword('');
              setErrorMessage('');
            }}
            className="btn waves-effect waves-light register-button"
          >
            {register ? 'Sign In' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
