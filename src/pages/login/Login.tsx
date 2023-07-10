import React, { ChangeEvent, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiFillLock, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import './style.css';
import userLogin from '../../api/userLogin';
import { setCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token } = await userLogin(form);

      setCookie(CookieKeys.SessionKey, token, {
        expires: (dayjs().add(7, 'day')).toDate(),
      });

      navigate('/writer');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={ submitLogin }>
          <label htmlFor="username-field" className="login-username-label">
            <BiUser className="user-login-icon"/>
            <input type="text" name="username" id="username-field" className="username-input" onChange={ handleChange } />
          </label>
          <label htmlFor="password-field" className="login-password-label">
            <AiFillLock className="password-login-icon" />
            <input type="password" name="password" id="password-field" className="password-input" onChange={ handleChange } />
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
