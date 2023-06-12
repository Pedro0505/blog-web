import { Route, Routes } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';
import Home from './pages/home/Home';
import Post from './pages/posts/Post';
import { ProjectsProvider } from './context/ProjectsContext';

function App() {
  return (
    <main>
      <PostsProvider>
        <Routes>
          <Route path="/" element={ <ProjectsProvider> <Home /> </ProjectsProvider> } />
          <Route path="/post/:title" element={ <Post />} />
        </Routes>
      </PostsProvider>
    </main>
  );
}

export default App;
