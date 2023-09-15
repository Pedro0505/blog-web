import ApiRoutes from '../../constants/ApiRoutes';
import handlesAxios from '../handleAxios';

const checkUser = async (token: string): Promise<{ authorized: boolean }> => {
  const response = await handlesAxios.get(ApiRoutes.AUTH, {
    headers: { Authorization: token },
  });

  return response.data;
};

export default checkUser;
