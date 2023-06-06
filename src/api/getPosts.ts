import handlesAxios from './handleAxios';
import IPosts from './interfaces/IPosts';

const getPosts = async (): Promise<IPosts> => {
  const response = await handlesAxios.get('/posts');

  return response.data;
};

export default getPosts;
