import React from 'react';
import CategoryCard from '../categoryCard/CategoryCard';
import Date from '../date/Date';

interface PostsCardsProps {
  title: string;
  description: string;
  published: string;
  category: string;
}

function PostsCards({ category, description, published, title }: PostsCardsProps) {
  return (
    <div>
      <Date published={ published } />
      <h1>{title}</h1>
      <p>{description}</p>
      <CategoryCard category={category} />
    </div>
  );
}

export default PostsCards;
