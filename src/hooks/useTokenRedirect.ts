import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../helpers/handleCookies';
import CookieKeys from '../constants/CookieKeys';
import checkUser from '../api/user/checkUser';

const useTokenRedirect = (authPath: string) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    (async () => {
      const token = getCookie(CookieKeys.SESSION_SECRET);
      if (token === null) {
        navigate(authPath);
        return;
      }

      try {
        const verify = await checkUser(token);
        setAuthorized(verify.authorized);
        if (!verify.authorized) {
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
