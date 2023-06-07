import React, { useContext, useEffect } from 'react';
import Header from '../components/header/Header';
import { PostsContext } from '../context/PostsContext';
import PostCard from '../components/postCard/PostCard';

function Home() {
  const { fetchPosts, posts } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
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
  );
}

export default Home;
