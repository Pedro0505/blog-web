import React from 'react';
import serializeDateToYear from '../../helpers/serializeDateToYear';
import './style.css';

interface PostDescriptionProrps {
  puplished: string;
}

function PostDescription({ puplished }: PostDescriptionProrps) {
  return (
    <div className="post-description-container">
      <img src="https://avatars.githubusercontent.com/u/87395119?v=4" alt="Foto do criador da postagem" className="post-author-image" />
      <span className="author-date-post-container">
        <p className="post-author">Pedro Henrique</p>
        <p className="post-page-date">{ serializeDateToYear(puplished) }</p>
      </span>
    </div>
  );
}

export default PostDescription;
