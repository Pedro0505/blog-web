import React from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { TiHome } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import SidebarCard from '../sidebar/sidebarCard/SidebarCard';
import { removeCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';
import './style.css';
import ButtonRedirect from '../buttonRedirect/ButtonRedirect';

function WriterSidebar() {
  const navigate = useNavigate();

  const handleLogot = () => {
    removeCookie(CookieKeys.SessionKey);

    navigate('/login');
  };

  return (
    <Sidebar className="writer-side-bar">
      <header className="writer-sidebar-header no-select">{'<Pedro />'}</header>
      <ButtonRedirect path="/">
        <SidebarCard>
          <TiHome />
          <p>Home</p>
        </SidebarCard>
      </ButtonRedirect>
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
