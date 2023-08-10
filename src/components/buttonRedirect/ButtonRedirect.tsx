import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonRedirectProps {
  children: ReactNode;
  path: string;
}

function ButtonRedirect({ children, path }: ButtonRedirectProps) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(path);
  };

  return (
    <button className="reset-btn" onClick={redirect}>
      {children}
    </button>
  );
}

export default ButtonRedirect;
