import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import { PostsContext } from '../../context/PostsContext';
import PostCard from '../../components/postCard/PostCard';
import Projects from '../../components/projects/Projects';
import './style.css';

function Home() {
  const { fetchPosts, posts } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <section className="home-post-project-container">
        <div className="posts-main">
          {
            posts.map((e) => (
              <PostCard
                key={e.id}
                category={e.category}
                description={e.description}
                published={e.published}
                title={e.title}
              />
            ))
          }
        </div>
        <Projects />
      </section>
    </>
  );
}

export default Home;
