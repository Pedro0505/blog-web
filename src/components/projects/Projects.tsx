import React, { useContext, useEffect } from 'react';
import './style.css';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectCard from '../projectCard/ProjectCard';
import Loading from '../loding/Loading';

function Projects() {
  const { fetchProjects, projects, projectsIsLoading } = useContext(ProjectsContext);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <aside className="projects-container">
      <h1 className="projects-title-aside">Projetos</h1>
      <div className="project-cards-box">
        {projectsIsLoading ? (
          <Loading />
        ) : (
          projects.map(e => <ProjectCard key={e.id} description={e.description} name={e.name} url={e.url} />)
        )}
      </div>
    </aside>
  );
}

export default Projects;
