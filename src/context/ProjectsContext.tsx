import React, { createContext, useState } from 'react';
import IProjectsContextProps from './interfaces/IProjectsContextProps';
import IProjectsContextType from './interfaces/IProjectsContextType';
import getProjects from '../api/getProjects';

const initialValue = {
  projects: [
    {
      id: '21321321wqsad',
      name: '',
      description: '',
      url: '',
    },
  ],
  fetchProjects: async () => {},
  projectsIsLoading: true,
};

export const ProjectsContext = createContext<IProjectsContextType>(initialValue);

export const ProjectsProvider = ({ children }: IProjectsContextProps) => {
  const [projects, setProjects] = useState(initialValue.projects);
  const [projectsIsLoading, setProjectsIsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();

      setProjects(response);
      setProjectsIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    projects,
    fetchProjects,
    projectsIsLoading,
  };

  return <ProjectsContext.Provider value={context}>{children}</ProjectsContext.Provider>;
};
