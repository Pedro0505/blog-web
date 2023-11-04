import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getPostPaginable from '../../../../../api/posts/getPostPaginable';
import IPostPaginable from '../../../../../api/interfaces/IPostPaginable';
import Loading from '../../../../../components/loding/Loading';
import Pagination from '../../../../../components/pagination/Pagination';
import Card from '../card/Card';
import './style.css';
import deletePost from '../../../../../api/posts/deletePost';
import serializeDateToYear from '../../../../../helpers/serializeDateToYear';

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<IPostPaginable>({ lastPage: 1, page: 1, posts: [], total: 1 });
  const [loading, setLoading] = useState(false);
  const [noContent, setNoContent] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async (page: number) => {
    setLoading(true);

    try {
      const itemsPerPage = 10;

      const data = await getPostPaginable(page, itemsPerPage);

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id: string) => {
    console.log(data.posts.length);
    try {
      await deletePost(id);
      fetchPosts(currentPage);

      setData(prevState => ({ ...prevState, posts: prevState.posts.filter(e => e.id !== id) }));
    } catch (error) {
      console.log(error);
    }
  };

  const onView = (id: string) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  useEffect(() => {
    console.log(data.posts.length);
    if (data.posts.length === 0 && loading) {
      handlePageChange(currentPage - 1);
    }

    if (data.posts.length === 0) {
      setNoContent(true);
    } else {
      setNoContent(false);
    }
  }, [data.posts.length]);

  const handlePageChange = async (newPage: number) => {
    await fetchPosts(newPage);

    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="post-paginable-items-container">
        {loading ? (
          <Loading />
        ) : (
          data.posts.map(item => (
            <Card
              key={item.id}
              onView={() => {
                onView(item.id);
              }}
              onDelete={async () => {
                await onDelete(item.id);
              }}>
              <h1>{item.title}</h1>
              <p>{serializeDateToYear(item.published)}</p>
            </Card>
          ))
        )}
      </div>
      {noContent ? (
        <p>Sem conteudo</p>
      ) : (
        <Pagination
          pageRange={2}
          totalPages={data.lastPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default Posts;
