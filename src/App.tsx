import { Route, Routes } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';
import Home from './pages/Home';
import Post from './pages/posts/Post';

function App() {
  return (
    <main>
      <PostsProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/post/:title" element={ <Post /> } />
        </Routes>
      </PostsProvider>
    </main>
  );
}

export default App;
