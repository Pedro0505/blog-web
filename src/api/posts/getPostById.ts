import ApiRoutes from '../../constants/ApiRoutes';
import handlesAxios from '../handleAxios';
import IPosts from '../interfaces/IPosts';

const getPostById = async (id: string): Promise<IPosts> => {
  const response = await handlesAxios.get(`${ApiRoutes.POSTS_ID}${id}`);

  return response.data;
};

export default getPostById;
