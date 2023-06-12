import IPosts from '../../api/interfaces/IPosts';

interface IPostsContextType {
  posts: IPosts[]
  fetchPosts(): Promise<void>
}

export default IPostsContextType;
