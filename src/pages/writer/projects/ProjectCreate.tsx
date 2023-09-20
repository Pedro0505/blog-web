import React from 'react';
import DynamicForm from '../../../components/dynamicForm/DynamicForm';
import IInputFields from '../../../components/dynamicForm/interfaces/IInputFields';
import * as schemas from '../../../validations/schemas/ProjectForm.schema';
import './style.css';
import createProject from '../../../api/project/createProject';
import useForm from '../../../hooks/useForm';

const fields: IInputFields[] = [
  { name: 'name', labelText: 'Nome do Projeto', validationSchema: schemas.name },
  { name: 'description', labelText: 'Descrição do Projeto', validationSchema: schemas.description },
  { name: 'url', labelText: 'Url do Projeto', validationSchema: schemas.url },
];

function ProjectCreate() {
  const { handleChange, values, resetForm } = useForm({ name: '', description: '', url: '' });

  const handleSubmit = async () => {
    await createProject(values);
  };

  return (
    <DynamicForm
      fields={fields}
      onFieldChange={handleChange}
      onSubmit={handleSubmit}
      values={values}
      cleanForm={resetForm}
      button={{ name: 'Criar Post', style: { padding: '10px 0' } }}
    />
  );
}

export default ProjectCreate;
