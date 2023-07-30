import React, { ChangeEvent, useState } from 'react';
import Editor from '../editor/Editor';
import createPost from '../../api/createPost';
import InputLabel from '../InputLabel/InputLabel';
import './style.css';

function CreatePost() {
  const [post, setPost] = useState({ category: '', description: '', title: '' });
  const [content, setContent] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async () => {
    try {
      await createPost({ ...post, content });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post-container">
      <InputLabel name="title" id="title-field" onChange={handleChange} labelText="Título" />
      <InputLabel name="description" id="description-field" onChange={handleChange} labelText="Descrição" />
      <InputLabel name="category" id="category-field" onChange={handleChange} labelText="Categoria" />
      <Editor setContent={setContent} />
      <button type="button" className="button-create-post" onClick={handleSubmit}>
        Criar Post
      </button>
    </div>
  );
}

export default CreatePost;
