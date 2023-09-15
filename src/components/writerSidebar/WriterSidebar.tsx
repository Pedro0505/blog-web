import React from 'react';
import { AiOutlinePoweroff, AiOutlineFundProjectionScreen, AiOutlineDashboard } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import SidebarCard from '../sidebar/sidebarCard/SidebarCard';
import { removeCookie } from '../../helpers/handleCookies';
import CookieKeys from '../../constants/CookieKeys';
import './style.css';
import ButtonRedirect from '../buttonRedirect/ButtonRedirect';
import WebRoutes from '../../constants/WebRoutes';

function WriterSidebar() {
  const navigate = useNavigate();

  const handleLogot = () => {
    removeCookie(CookieKeys.SESSION_SECRET);

    navigate(WebRoutes.LOGIN);
  };

  return (
    <Sidebar className="writer-side-bar">
      <header className="writer-sidebar-header no-select">{'<Pedro />'}</header>
      <ButtonRedirect path={WebRoutes.WRITER_POSTS}>
        <SidebarCard>
          <BsPencilFill />
          <p>Posts</p>
        </SidebarCard>
      </ButtonRedirect>
      <ButtonRedirect path={WebRoutes.WRITER_PROJECTS}>
        <SidebarCard>
          <AiOutlineFundProjectionScreen />
          <p>Projects</p>
        </SidebarCard>
      </ButtonRedirect>
      <ButtonRedirect path={WebRoutes.WRITER_DASHBOARD}>
        <SidebarCard>
          <AiOutlineDashboard />
          <p>Dashboard</p>
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
