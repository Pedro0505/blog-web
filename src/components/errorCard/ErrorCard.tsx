import React from 'react';
import './style.css';

interface ErrorCardProps {
  message: string;
}

function ErrorCard({ message }: ErrorCardProps) {
  return (
    <span className="error-message-container">
      <p className="error-message-text">{message}</p>
    </span>
  );
}

export default ErrorCard;
