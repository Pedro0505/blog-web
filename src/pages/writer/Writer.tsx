import React, { useEffect, useState } from 'react';
import useTokenRedirect from '../../hooks/useTokenRedirect';
import CreatePost from '../../components/createPost/CreatePost';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import WriterSidebar from '../../components/writerSidebar/WriterSidebar';
import './style.css';

function Writer() {
  const authorized = useTokenRedirect('/login', '/writer');
  const [logged, setLogged] = useState(false);
  useDocumentTitle('Writer');

  useEffect(() => {
    setLogged(authorized.current);
  }, [authorized.current]);

  return (
    <>
      {logged && (
        <main className="writer-content">
          <WriterSidebar />
          <CreatePost />
        </main>
      )}
    </>
  );
}

export default Writer;
