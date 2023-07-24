import React, { createContext, useState } from 'react';
import IPostsContextProps from './interfaces/IPostsContextProps';
import IPostsContextType from './interfaces/IPostsContextType';
import getPosts from '../api/getPosts';

const initialValue = {
  posts: [
    {
      id: 'sad23122easdsadasd',
      title: '',
      description: '',
      content: '',
      published: '2011-08-01T19:58:00.000Z',
      category: '',
    },
  ],
  fetchPosts: async () => {},
  postsIsLoading: true,
};

export const PostsContext = createContext<IPostsContextType>(initialValue);

export const PostsProvider = ({ children }: IPostsContextProps) => {
  const [posts, setPosts] = useState(initialValue.posts);
  const [postsIsLoading, setPostsIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();

      setPosts(response);
      setPostsIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    posts,
    fetchPosts,
    postsIsLoading,
  };

  return <PostsContext.Provider value={context}>{children}</PostsContext.Provider>;
};
