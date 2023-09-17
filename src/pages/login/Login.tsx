import React, { useState } from 'react';
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
import useDocumentTitle from '../../hooks/useDocumentTitle';
import LoginFormSchema from '../../validations/schemas/LoginForm.schema';
import WebRoutes from '../../constants/WebRoutes';
import DynamicForm from '../../components/dynamicForm/DynamicForm';
import IInputFields from '../../components/dynamicForm/interfaces/IInputFields';
import './style.css';

const fields: IInputFields[] = [
  {
    name: 'username',
    validationSchema: LoginFormSchema.username,
    inputIcon: <BiUser />,
    placeholder: 'Digite seu nome de usuário aqui...',
  },
  {
    name: 'password',
    validationSchema: LoginFormSchema.password,
    inputIcon: <AiFillLock />,
    placeholder: 'Digite sua senha aqui...',
    type: 'password',
  },
];

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errorsMsg, setErrorsMsg] = useState<string[]>([]);
  const navigate = useNavigate();
  useDocumentTitle('Login');

  const handleChange = (name: string, value: string) => {
    setForm(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitLogin = async () => {
    try {
      const { token } = await userLogin(form);

      setCookie(CookieKeys.SESSION_SECRET, token, {
        expires: dayjs().add(7, 'day').toDate(),
      });

      navigate(WebRoutes.WRITER_POSTS);
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
        <DynamicForm
          button={{ name: 'Entrar', style: { marginBottom: '10px' }, icon: <AiOutlineArrowRight /> }}
          fields={fields}
          onSubmit={submitLogin}
          onFieldChange={handleChange}
        />
        {errorsMsg.map((message, index) => (
          <ErrorCard message={message} key={`${index}-${message}`} />
        ))}
      </div>
    </main>
  );
}

export default Login;
