import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const a = useParams<{ title: string }>();

  return (
    <h1>{String(a.title)}</h1>
  );
}

export default Post;
