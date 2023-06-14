import handlesAxios from './handleAxios';
import IPosts from './interfaces/IPosts';

const getPostById = async (id: string): Promise<IPosts> => {
  const response = await handlesAxios.get(`/posts/${id}`);

  return response.data;
};

export default getPostById;
