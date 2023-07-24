import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import { PostsContext } from '../../context/PostsContext';
import PostCard from '../../components/postCard/PostCard';
import Projects from '../../components/projects/Projects';
import Contacts from '../../components/contacts/Contacts';
import './style.css';
import Loading from '../../components/loding/Loading';

function Home() {
  const { fetchPosts, posts, postsIsLoading } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <section className="home-post-project-container">
        <div className="posts-main">
          {postsIsLoading ? (
            <Loading />
          ) : (
            posts.map(e => (
              <PostCard
                key={e.id}
                postId={e.id}
                category={e.category}
                description={e.description}
                published={e.published}
                title={e.title}
              />
            ))
          )}
        </div>
        <section className="projects-contacts-container">
          <Projects />
          <Contacts />
        </section>
      </section>
    </>
  );
}

export default Home;
