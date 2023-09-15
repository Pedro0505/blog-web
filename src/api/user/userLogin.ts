import ApiRoutes from '../../constants/ApiRoutes';
import handlesAxios from '../handleAxios';
import ILogin from '../interfaces/ILogin';

const userLogin = async ({ username, password }: ILogin): Promise<{ token: string }> => {
  const response = await handlesAxios.post(ApiRoutes.USER_LOGIN, { username, password });

  return response.data;
};

export default userLogin;
