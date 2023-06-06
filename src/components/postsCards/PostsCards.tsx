import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar2Date } from 'react-icons/bs';

interface PostsCardsProps {
  title: string;
  description: string;
  published: string;
  category: string;
}

function PostsCards({ category, description, published, title }: PostsCardsProps) {
  return (
    <div>
      <div>
        <BsCalendar2Date />
        <p>{dayjs(published).format('DD/MM/YYYY')}</p>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{category}</span>
    </div>
  );
}

export default PostsCards;
