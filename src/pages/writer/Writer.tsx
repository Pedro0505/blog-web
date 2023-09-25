import React, { useEffect, useState } from 'react';
import useTokenRedirect from '../../hooks/useTokenRedirect';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import WriterSidebar from '../../components/writerSidebar/WriterSidebar';
import WebRoutes from '../../constants/WebRoutes';
import './style.css';

function Writer({ children }: { children: React.ReactNode }) {
  const authorized = useTokenRedirect(WebRoutes.LOGIN);
  const [logged, setLogged] = useState(false);
  useDocumentTitle('Writer');

  useEffect(() => {
    setLogged(authorized);
  }, [authorized]);

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
