import React from 'react';
import InputLabel from '../../../components/InputLabel/InputLabel';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import './style.css';

function ProjectCreate() {
  return (
    <div className="project-create">
      <InputLabel name="project-name" id="project-name-field" labelText="Nome do projeto" />
      <InputLabel name="description" id="description-field" labelText="Descrição" />
      <InputLabel name="url" id="url-field" labelText="Url do Projeto" />
      <ButtonIcon style={{ padding: '10px 0' }} name="Adicionar Projeto" type="button" />
    </div>
  );
}

export default ProjectCreate;
