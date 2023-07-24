import React, { ChangeEvent, useState } from 'react';
import Editor from '../editor/Editor';
import './style.css';
import createPost from '../../api/createPost';

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
      <label htmlFor="title">
        <p>Título</p>
        <input type="text" name="title" id="title-field" onChange={handleChange} />
      </label>
      <label htmlFor="description">
        <p>Descrição</p>
        <input type="text" name="description" id="description-field" onChange={handleChange} />
      </label>
      <label htmlFor="category">
        <p>Categoria</p>
        <input type="text" name="category" id="category-field" onChange={handleChange} />
      </label>
      <Editor setContent={setContent} />
      <button type="button" className="button-create-post" onClick={handleSubmit}>
        Criar Post
      </button>
    </div>
  );
}

export default CreatePost;
