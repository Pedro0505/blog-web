import { PostsProvider } from './context/PostsContext';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <PostsProvider>
        <Home />
      </PostsProvider>
    </div>
  );
}

export default App;
