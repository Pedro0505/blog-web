import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../categoryCard/CategoryCard';
import Date from '../date/Date';
import './style.css';

interface PostsCardsProps {
  postId: string;
  title: string;
  description: string;
  published: string;
  category: string;
}

function PostsCards({ category, description, published, title, postId }: PostsCardsProps) {
  return (
    <Link to={`post/${postId}`} className="home-post-link-redirect">
      <div className="post-card-container">
        <Date published={published} />
        <h1 className="post-card-title">{title}</h1>
        <p className="post-card-description">{description}</p>
        <CategoryCard category={category} />
      </div>
    </Link>
  );
}

export default PostsCards;
