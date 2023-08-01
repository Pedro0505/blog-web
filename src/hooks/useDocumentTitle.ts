import { useEffect } from 'react';

function useDocumentTitle(title: string, prevailOnUnmount = false) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
