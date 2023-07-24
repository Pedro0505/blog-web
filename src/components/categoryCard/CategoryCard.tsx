import React from 'react';
import './style.css';

interface CategoryCardProps {
  category: string;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="category-container">
      <p className="category-name">{category}</p>
    </div>
  );
}

export default CategoryCard;
