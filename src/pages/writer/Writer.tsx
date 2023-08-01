import React, { useEffect, useState } from 'react';
import useTokenRedirect from '../../hooks/useTokenRedirect';
import CreatePost from '../../components/createPost/CreatePost';
import './style.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Writer() {
  const authorized = useTokenRedirect();
  const [logged, setLogged] = useState(false);
  useDocumentTitle('Writer');

  useEffect(() => {
    setLogged(authorized.current);
  }, [authorized.current]);

  return (
    <>
      {logged && (
        <main className="writer-content">
          <CreatePost />
        </main>
      )}
    </>
  );
}

export default Writer;
