import ApiRoutes from '../../constants/ApiRoutes';
import handlesAxios from '../handleAxios';
import IPostPaginable from '../interfaces/IPostPaginable';

const getPostPaginable = async (page: number, limit: number): Promise<IPostPaginable> => {
  const response = await handlesAxios.get(`${ApiRoutes.POSTS}?page=${page}&limit=${limit}`);

  return response.data;
};

export default getPostPaginable;
