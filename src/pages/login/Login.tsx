import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiFillLock, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import userLogin from '../../api/user/userLogin';
import { setCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';
import ErrorCard from '../../components/errorCard/ErrorCard';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import LoginFormSchema from '../../validations/schemas/LoginForm.schema';
import WebRoutes from '../../constants/WebRoutes';
import DynamicForm from '../../components/dynamicForm/DynamicForm';
import IInputFields from '../../components/dynamicForm/interfaces/IInputFields';
import useForm from '../../hooks/useForm';
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
  const { handleChange, values } = useForm({ username: '', password: '' });
  const [errorsMsg, setErrorsMsg] = useState<string[]>([]);
  const navigate = useNavigate();
  useDocumentTitle('Login');

  const submitLogin = async () => {
    const { token } = await userLogin(values);

    setCookie(CookieKeys.SESSION_SECRET, token, {
      expires: dayjs().add(7, 'day').toDate(),
    });

    navigate(WebRoutes.WRITER_POSTS);
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
          errorMsgRef={setErrorsMsg}
        />
        {errorsMsg.map((message, index) => (
          <ErrorCard message={message} key={`${index}-${message}`} />
        ))}
      </div>
    </main>
  );
}

export default Login;
