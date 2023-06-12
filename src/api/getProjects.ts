import handlesAxios from './handleAxios';
import IProjects from './interfaces/IProjects';

const getProjects = async (): Promise<IProjects[]> => {
  const response = await handlesAxios.get('/projects');

  return response.data;
};

export default getProjects;
