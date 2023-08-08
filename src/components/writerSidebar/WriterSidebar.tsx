import React from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';
import Sidebar from '../sidebar/Sidebar';
import SidebarCard from '../sidebar/sidebarCard/SidebarCard';
import './style.css';
import { removeCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';
import { useNavigate } from 'react-router-dom';

function WriterSidebar() {
  const navigate = useNavigate();

  const handleLogot = () => {
    removeCookie(CookieKeys.SessionKey);

    navigate('/login');
  };

  return (
    <Sidebar className="writer-side-bar">
      <header className="writer-sidebar-header">{'<Pedro />'}</header>
      <button className="writer-sidebar-logout-button" onClick={handleLogot}>
        <SidebarCard>
          <AiOutlinePoweroff />
          <p>Logout</p>
        </SidebarCard>
      </button>
    </Sidebar>
  );
}

export default WriterSidebar;
