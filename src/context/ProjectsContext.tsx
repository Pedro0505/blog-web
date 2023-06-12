import React, { createContext, useState } from 'react';
import IProjectsContextProps from './interfaces/IProjectsContextProps';
import IProjectsContextType from './interfaces/IProjectsContextType';
import getProjects from '../api/getProjects';

const initialValue = {
  projects: [{
    id: 1,
    name: '',
    description: '',
    url: '',
  }],
  fetchProjects: async () => {},
};

export const ProjectsContext = createContext<IProjectsContextType>(initialValue);

export const ProjectsProvider = ({ children }: IProjectsContextProps) => {
  const [projects, setProjects] = useState(initialValue.projects);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();

      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    projects,
    fetchProjects,
  };

  return (
    <ProjectsContext.Provider value={ context }>
      { children }
    </ProjectsContext.Provider>
  );
};
