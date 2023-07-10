import React, { useEffect, useState } from 'react';
import useTokenRedirect from '../../hooks/useTokenRedirect';

function Writer() {
  const authorized = useTokenRedirect();
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    setLoged(authorized.current);
  }, [authorized.current]);

  return (
    <>
      {
        loged && <div>Writer</div>
      }
    </>
  );
}

export default Writer;
