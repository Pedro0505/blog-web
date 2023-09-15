import ApiRoutes from '../../constants/ApiRoutes';
import handlesAxios from '../handleAxios';
import IPosts from '../interfaces/IPosts';

const getPosts = async (): Promise<IPosts[]> => {
  const response = await handlesAxios.get(ApiRoutes.POSTS);

  return response.data;
};

export default getPosts;
