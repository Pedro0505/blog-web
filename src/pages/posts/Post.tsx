import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Projects from '../../components/projects/Projects';
import './style.css';
import getPostById from '../../api/getPostById';
import IPosts from '../../api/interfaces/IPosts';
import PostDescription from '../../components/postDescription/PostDescription';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import Contacts from '../../components/contacts/Contacts';

const initialState = {
  post: {
    id: 's2o3k4o12423o4k23',
    title: '',
    description: '',
    content: '',
    published: '2012-08-01T19:58:00.000Z',
    category: '',
  },
};

function Post() {
  const params = useParams<{ postId: string }>();
  const [post, setPost] = useState<IPosts>(initialState.post);

  const getPostByIdResponse = async () => {
    if (params.postId) {
      const response = await getPostById(params.postId);

      setPost(response);
    }
  };

  useEffect(() => {
    getPostByIdResponse();
  }, []);

  return (
    <>
      <Header />
      <main className="post-page-container">
        <section className="post-page">
          <h1 className="post-page-title">{post.title}</h1>
          <PostDescription puplished={post.published} />
          <CategoryCard category={post.category} />
          <div className="post-content-container" dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>
        <section className="projects-contacts-container">
          <Projects />
          <Contacts />
        </section>
      </main>
    </>
  );
}

export default Post;
