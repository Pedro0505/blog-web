import IProjects from '../../api/interfaces/IProjects';

interface IProjectsContextType {
  projects: IProjects[]
  fetchProjects(): Promise<void>
  projectsIsLoading: boolean
}

export default IProjectsContextType;
