import React, { useRef, useState } from 'react';
import schemas from '../../../validations/schemas/PostForm.schema';
import createPost from '../../../api/posts/createPost';
import Editor from '../../../components/editor/Editor';
import './style.css';
import DynamicForm from '../../../components/dynamicForm/DynamicForm';
import IInputFields from '../../../components/dynamicForm/interfaces/IInputFields';
import useForm from '../../../hooks/useForm';

const fields: IInputFields[] = [
  { name: 'title', labelText: 'Título', validationSchema: schemas.title },
  { name: 'description', labelText: 'Categoria', validationSchema: schemas.category },
  { name: 'category', labelText: 'Descrição', validationSchema: schemas.category },
];

function PostCreate() {
  const { handleChange, values } = useForm({ category: '', description: '', title: '', content: '' });
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');
  const errorRef = useRef(false);

  const handleError = () => {
    errorRef.current = false;
    let fieldErrors = '';

    const fieldSchema = schemas.content.validate(content, { abortEarly: false });
    if (fieldSchema.error) {
      errorRef.current = true;
      fieldErrors = fieldSchema.error.message;
    } else {
      fieldErrors = '';
    }

    setContentError(fieldErrors);
  };

  const handleSubmit = async () => {
    handleError();

    if (!errorRef.current) {
      await createPost({ ...values, content });
    }
  };

  return (
    <DynamicForm
      fields={fields}
      onFieldChange={handleChange}
      onSubmit={handleSubmit}
      button={{ name: 'Criar Post', style: { padding: '10px 0' } }}>
      <Editor setContent={setContent} error={contentError} />
    </DynamicForm>
  );
}

export default PostCreate;
