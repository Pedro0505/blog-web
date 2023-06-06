import React, { createContext, useState } from 'react';
import IPostsContextProps from './interfaces/IPostsContextProps';
import IPostsContextType from './interfaces/IPostsContextType';
import getPosts from '../api/getPosts';

const initialValue = {
  posts: [{
    id: 1,
    title: '',
    description: '',
    content: '',
    published: '2011-08-01T19:58:00.000Z',
    category: '',
  }],
  fetchPosts: async () => {},
};

export const PostsContext = createContext<IPostsContextType>(initialValue);

export const PostsProvider = ({ children }: IPostsContextProps) => {
  const [posts, setPosts] = useState(initialValue.posts);

  const fetchPosts = async () => {
    const response = await getPosts();

    setPosts(response);
  };

  const context = {
    posts,
    fetchPosts,
  };

  return (
    <PostsContext.Provider value={ context }>
      { children }
    </PostsContext.Provider>
  );
};
