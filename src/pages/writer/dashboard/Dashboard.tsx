import React, { useState } from 'react';
import './style.css';
import Posts from './components/posts/Posts';
import Projects from './components/projects/Projects';
import Button from '../../../components/button/Button';

function Dashboard() {
  const [component, setComponent] = useState<JSX.Element>(<Posts />);

  const showComponent = (component: JSX.Element) => {
    setComponent(component);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-btn-containers">
        <Button
          type="button"
          className={component.type.name === 'Posts' ? 'rendering-component' : ''}
          onClick={() => {
            showComponent(<Posts />);
          }}>
          Posts
        </Button>
        <Button
          type="button"
          className={component.type.name === 'Projects' ? 'rendering-component' : ''}
          onClick={() => {
            showComponent(<Projects />);
          }}>
          Projects
        </Button>
      </div>
      {component}
    </div>
  );
}

export default Dashboard;
