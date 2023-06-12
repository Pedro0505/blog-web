import IProjects from '../../api/interfaces/IProjects';

interface IProjectsContextType {
  projects: IProjects[]
  fetchProjects(): Promise<void>
}

export default IProjectsContextType;
