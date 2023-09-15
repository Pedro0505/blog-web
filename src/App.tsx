import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';
import Home from './pages/home/Home';
import Post from './pages/posts/Post';
import { ProjectsProvider } from './context/ProjectsContext';
import Login from './pages/login/Login';
import Writer from './pages/writer/Writer';
import ProjectCreate from './pages/writer/projects/ProjectCreate';
import WebRoutes from './constants/WebRoutes';
import PostCreate from './pages/writer/posts/PostCreate';
import Dashboard from './pages/writer/dashboard/Dashboard';

function App() {
  return (
    <main>
      <PostsProvider>
        <Routes>
          <Route
            path={WebRoutes.HOME}
            element={
              <ProjectsProvider>
                <Home />
              </ProjectsProvider>
            }
          />
          <Route
            path={WebRoutes.POSTS_ID}
            element={
              <ProjectsProvider>
                <Post />
              </ProjectsProvider>
            }
          />
          <Route path={WebRoutes.LOGIN} element={<Login />} />
          <Route
            path={WebRoutes.WRITER_POSTS}
            element={
              <Writer>
                <PostCreate />
              </Writer>
            }
          />
          <Route
            path={WebRoutes.WRITER_PROJECTS}
            element={
              <Writer>
                <ProjectCreate />
              </Writer>
            }
          />
          <Route
            path={WebRoutes.WRITER_DASHBOARD}
            element={
              <Writer>
                <Dashboard />
              </Writer>
            }
          />
        </Routes>
      </PostsProvider>
    </main>
  );
}

export default App;
