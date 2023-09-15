import React, { useEffect, useState } from 'react';
import useTokenRedirect from '../../hooks/useTokenRedirect';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import WriterSidebar from '../../components/writerSidebar/WriterSidebar';
import './style.css';
import WebRoutes from '../../constants/WebRoutes';

function Writer({ children }: { children: React.ReactNode }) {
  const authorized = useTokenRedirect(WebRoutes.LOGIN, WebRoutes.WRITER_POSTS);
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
          {children}
        </main>
      )}
    </>
  );
}

export default Writer;
