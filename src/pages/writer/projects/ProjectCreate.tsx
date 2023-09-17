import React, { useState } from 'react';
import DynamicForm from '../../../components/dynamicForm/DynamicForm';
import './style.css';
import IInputFields from '../../../components/dynamicForm/interfaces/IInputFields';
import * as schemas from '../../../validations/schemas/ProjectForm.schema';

const fields: IInputFields[] = [
  { name: 'name', labelText: 'Nome do Projeto', validationSchema: schemas.name },
  { name: 'description', labelText: 'Descrição do Projeto', validationSchema: schemas.description },
  { name: 'url', labelText: 'Url do Projeto', validationSchema: schemas.url },
];

function ProjectCreate() {
  const [formData, setFormData] = useState({ name: '', description: '', url: '' });

  const handleFieldChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log('Form Data:', formData);
  };

  return (
    <DynamicForm
      fields={fields}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
      button={{ name: 'Criar Post', style: { padding: '10px 0' } }}
    />
  );
}

export default ProjectCreate;
