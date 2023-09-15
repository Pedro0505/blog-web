import ApiRoutes from '../../constants/ApiRoutes';
import CookieKeys from '../../constants/CookieKeys';
import { getCookie } from '../../helpers/handleCookies';
import handlesAxios from '../handleAxios';
import IPostCreate from '../interfaces/IPostCreate';
import IPosts from '../interfaces/IPosts';

const createPost = async (post: IPostCreate): Promise<IPosts> => {
  const token = getCookie(CookieKeys.SESSION_SECRET);

  const response = await handlesAxios.post(ApiRoutes.POSTS, post, {
    headers: { Authorization: token },
  });

  return response.data;
};

export default createPost;
