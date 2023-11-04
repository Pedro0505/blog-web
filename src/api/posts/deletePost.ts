import ApiRoutes from '../../constants/ApiRoutes';
import CookieKeys from '../../constants/CookieKeys';
import { getCookie } from '../../helpers/handleCookies';
import handlesAxios from '../handleAxios';

const deletePost = async (id: string): Promise<void> => {
  const token = getCookie(CookieKeys.SESSION_SECRET);

  await handlesAxios.delete(`${ApiRoutes.POSTS_ID}${id}`, {
    headers: { Authorization: token },
  });
};

export default deletePost;
