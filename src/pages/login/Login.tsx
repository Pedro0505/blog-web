import React, { ChangeEvent, useRef, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiFillLock, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Axios from 'axios';
import userLogin from '../../api/user/userLogin';
import { setCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';
import ErrorCard from '../../components/errorCard/ErrorCard';
import handleApiErrors from '../../helpers/handleApiErrors';
import InputIcon from '../../components/inputIcon/InputIcon';
import ButtonIcon from '../../components/buttonIcon/ButtonIcon';
import './style.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import LoginFormSchema from '../../validations/schemas/LoginForm.schema';
import WebRoutes from '../../constants/WebRoutes';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errorsMsg, setErrorsMsg] = useState<string[]>([]);
  const [errorsMsgFields, setErrorsMsgFields] = useState({ username: '', password: '' });
  const errorRef = useRef(false);
  const navigate = useNavigate();
  useDocumentTitle('Login');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleError = async () => {
    const usernamechema = LoginFormSchema.username.validate(form.username);
    const passwordSchema = LoginFormSchema.password.validate(form.password);

    if (usernamechema.error || passwordSchema.error) {
      errorRef.current = true;
    } else {
      errorRef.current = false;
    }

    setErrorsMsgFields({
      username: usernamechema.error ? usernamechema.error.message : '',
      password: passwordSchema.error ? passwordSchema.error.message : '',
    });
  };

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleError();

    try {
      if (!errorRef.current) {
        const { token } = await userLogin(form);

        setCookie(CookieKeys.SESSION_SECRET, token, {
          expires: dayjs().add(7, 'day').toDate(),
        });

        navigate(WebRoutes.WRITER_POSTS);
      }
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
            error={errorsMsgFields.username}
            className="inputs-login"
          />
          <InputIcon
            icon={<AiFillLock />}
            type="password"
            name="password"
            id="password-field"
            onChange={handleChange}
            placeholder="Digite sua senha aqui..."
            error={errorsMsgFields.password}
            className="inputs-login"
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
