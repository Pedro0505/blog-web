import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../helpers/handleCookies';
import CookieKeys from '../constants/CookieKeys';
import checkUser from '../api/user/checkUser';

const useTokenRedirect = (authPath: string, authorizedPath: string) => {
  const navigate = useNavigate();
  const authorized = useRef(false);

  useEffect(() => {
    (async () => {
      const token = getCookie(CookieKeys.SESSION_SECRET);
      if (token === null) {
        navigate(authPath);
        return;
      }

      try {
        const verify = await checkUser(token);
        authorized.current = verify.authorized;
        if (verify.authorized) {
          navigate(authorizedPath);
        } else {
          navigate(authPath);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return authorized;
};

export default useTokenRedirect;
