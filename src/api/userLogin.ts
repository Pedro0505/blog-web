import handlesAxios from './handleAxios';
import ILogin from './interfaces/ILogin';

const userLogin = async ({ username, password }: ILogin): Promise<{ token: string }> => {
  const response = await handlesAxios.post('/user/login', { username, password });

  return response.data;
};

export default userLogin;
