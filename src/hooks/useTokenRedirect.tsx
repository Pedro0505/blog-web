import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../helpers/handleCookies';
import CookieKeys from '../constants/CookieKeys';
import checkUser from '../api/checkUser';

const useTokenRedirect = () => {
  const navigate = useNavigate();
  const authorized = useRef(false);

  useEffect(() => {
    (async () => {
      const token = getCookie(CookieKeys.SessionKey);
      if (token === null) {
        navigate('/login');
        return;
      }

      try {
        const verify = await checkUser(token);
        authorized.current = verify.authorized;
        if (verify.authorized) {
          navigate('/writer');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return authorized;
};

export default useTokenRedirect;
