import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AiFillLock, AiOutlineArrowRight } from 'react-icons/ai';
import './style.css';

function Login() {
  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={ submitLogin }>
          <label htmlFor="username-field" className="login-username-label">
            <BiUser className="user-login-icon"/>
            <input type="text" name="username" id="username-field" className="username-input" />
          </label>
          <label htmlFor="password-field" className="login-password-label">
            <AiFillLock className="password-login-icon" />
            <input type="password" name="password" id="password-field" className="password-input" />
          </label>
          <button type="submit" className="login-submit">
            Entrar
            <AiOutlineArrowRight className="login-arrow-submit" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
