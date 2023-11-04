import React, { ReactNode } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import './style.css';
import Button from '../../../../../components/button/Button';

interface CardProps {
  children: ReactNode;
  onDelete?: () => Promise<void>;
  onView?: () => void;
}

function Card({ children, onDelete = async () => {}, onView = () => {} }: CardProps) {
  const handleDelete = async () => {
    await onDelete();
  };

  const handleView = () => {
    onView();
  };

  return (
    <section className="dashboard-card">
      {children}
      <div className="card-button-container">
        <Button className="card-view-icon" onClick={handleView}>
          <AiFillEye />
        </Button>
        <Button className="card-delete-icon" onClick={handleDelete}>
          <BsTrashFill />
        </Button>
      </div>
    </section>
  );
}

export default Card;
