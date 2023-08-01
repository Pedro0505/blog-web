import React, { ChangeEvent, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiFillLock, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Axios from 'axios';
import userLogin from '../../api/userLogin';
import { setCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';
import ErrorCard from '../../components/errorCard/ErrorCard';
import handleApiErrors from '../../helpers/handleApiErrors';
import InputIcon from '../../components/inputIcon/InputIcon';
import ButtonIcon from '../../components/buttonIcon/ButtonIcon';
import './style.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errorsMsg, setErrorsMsg] = useState<string[]>([]);
  const navigate = useNavigate();
  useDocumentTitle('Login');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token } = await userLogin(form);

      setCookie(CookieKeys.SessionKey, token, {
        expires: dayjs().add(7, 'day').toDate(),
      });

      navigate('/writer');
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        console.log(error);

        setErrorsMsg(handleApiErrors(error));
      }
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={submitLogin}>
          <InputIcon
            icon={<BiUser />}
            name="username"
            id="username-field"
            type="text"
            onChange={handleChange}
            placeholder="Digite seu nome de usuário aqui..."
          />
          <InputIcon
            icon={<AiFillLock />}
            type="password"
            name="password"
            id="password-field"
            onChange={handleChange}
            placeholder="Digite sua senha aqui..."
          />
          <ButtonIcon name="Entrar" type="submit" icon={<AiOutlineArrowRight />} style={{ marginBottom: '10px' }} />
          {errorsMsg.map((message, index) => (
            <ErrorCard message={message} key={`${index}-${message}`} />
          ))}
        </form>
      </div>
    </main>
  );
}

export default Login;
