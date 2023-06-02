import React from 'react';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineCode } from 'react-icons/ai';

function Contacts() {
  return (
    <div className="contacts-container">
      <a href="https://www.linkedin.com/in/pedrohenriquer/" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/Pedro0505" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
      <a href="https://pedro-silva.vercel.app" target="_blank" rel="noreferrer">
        <AiOutlineCode />
      </a>
    </div>
  );
}

export default Contacts;
