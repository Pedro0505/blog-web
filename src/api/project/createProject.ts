import ApiRoutes from '../../constants/ApiRoutes';
import CookieKeys from '../../constants/CookieKeys';
import { getCookie } from '../../helpers/handleCookies';
import handlesAxios from '../handleAxios';
import IProjectCreate from '../interfaces/IProjectCreate';
import IProjects from '../interfaces/IProjects';

const createProject = async (post: IProjectCreate): Promise<IProjects> => {
  const token = getCookie(CookieKeys.SESSION_SECRET);

  const response = await handlesAxios.post(ApiRoutes.PROJECTS, post, {
    headers: { Authorization: token },
  });

  return response.data;
};

export default createProject;
