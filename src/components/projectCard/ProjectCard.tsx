import React from 'react';
import './style.css';

interface ProjectCardsProps {
  name: string;
  description: string;
  url: string;
}

function ProjectCard({ description, name, url }: ProjectCardsProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="project-card-container">
      <h1 className="project-name">{name}</h1>
      <p className="project-description">{description}</p>
    </a>
  );
}

export default ProjectCard;
