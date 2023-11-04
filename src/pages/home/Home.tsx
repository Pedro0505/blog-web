import React, { useRef, useState } from 'react';
import Header from '../../components/header/Header';
import PostCard from '../../components/postCard/PostCard';
import Projects from '../../components/projects/Projects';
import Contacts from '../../components/contacts/Contacts';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import getPostPaginable from '../../api/posts/getPostPaginable';
import IPosts from '../../api/interfaces/IPosts';
import './style.css';
import Loading from '../../components/loding/Loading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function Home() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const page = useRef(1);
  const lastPage = useRef(1);
  useDocumentTitle('Blog');
  const observer = useIntersectionObserver({
    render: async () => {
      if (!isLoading && page.current <= lastPage.current) {
        setIsLoading(true);
        try {
          const data = await getPostPaginable(page.current, 20);
          lastPage.current = data.lastPage;
          setPosts(prevItems => [...prevItems, ...data.posts]);
          setIsLoading(false);
          page.current += 1;
        } catch (error) {
          console.error(error);
        }
      }
    },
    options: {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    },
  });

  return (
    <>
      <Header />
      <section className="home-post-project-container">
        <div className="posts-main">
          {posts.map(e => (
            <PostCard
              key={e.id}
              postId={e.id}
              category={e.category}
              description={e.description}
              published={e.published}
              title={e.title}
            />
          ))}
          {observer}
          {isLoading && <Loading />}
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
