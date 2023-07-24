import { Route, Routes } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';
import Home from './pages/home/Home';
import Post from './pages/posts/Post';
import { ProjectsProvider } from './context/ProjectsContext';
import Login from './pages/login/Login';
import Writer from './pages/writer/Writer';

function App() {
  return (
    <main>
      <PostsProvider>
        <Routes>
          <Route path="/" element={ <ProjectsProvider> <Home /> </ProjectsProvider> } />
          <Route path="/post/:postId" element={ <ProjectsProvider> <Post /> </ProjectsProvider> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/writer" element={ <Writer /> } />
        </Routes>
      </PostsProvider>
    </main>
  );
}

export default App;
