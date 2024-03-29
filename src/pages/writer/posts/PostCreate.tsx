import React, { ChangeEvent, useRef, useState } from 'react';
import PostFormSchema from '../../../validations/schemas/PostForm.schema';
import createPost from '../../../api/posts/createPost';
import InputLabel from '../../../components/InputLabel/InputLabel';
import Editor from '../../../components/editor/Editor';
import './style.css';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

function PostCreate() {
  const [post, setPost] = useState({ category: '', description: '', title: '' });
  const [errors, setErrors] = useState({ category: '', description: '', title: '', content: '' });
  const [content, setContent] = useState('');
  const errorRef = useRef(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleError = async () => {
    const categorySchema = PostFormSchema.category.validate(post.category);
    const contentSchema = PostFormSchema.content.validate(content);
    const descriptionSchema = PostFormSchema.description.validate(post.description);
    const titleSchema = PostFormSchema.title.validate(post.title);

    if (categorySchema.error || contentSchema.error || descriptionSchema.error || titleSchema.error) {
      errorRef.current = true;
    } else {
      errorRef.current = false;
    }

    setErrors({
      category: categorySchema.error ? categorySchema.error.message : '',
      description: descriptionSchema.error ? descriptionSchema.error.message : '',
      title: titleSchema.error ? titleSchema.error.message : '',
      content: contentSchema.error ? contentSchema.error.message : '',
    });
  };

  const handleSubmit = async () => {
    try {
      handleError();

      if (!errorRef.current) {
        await createPost({ ...post, content });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post-container">
      <InputLabel name="title" id="title-field" onChange={handleChange} labelText="Título" error={errors.title} />
      <InputLabel
        name="description"
        id="description-field"
        onChange={handleChange}
        labelText="Descrição"
        error={errors.description}
      />
      <InputLabel
        name="category"
        id="category-field"
        onChange={handleChange}
        labelText="Categoria"
        error={errors.category}
      />
      <Editor setContent={setContent} error={errors.content} />
      <ButtonIcon style={{ padding: '10px 0' }} name="Criar Post" onClick={handleSubmit} type="button" />
    </div>
  );
}

export default PostCreate;
