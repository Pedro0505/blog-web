import React from 'react';

interface CategoryCardProps {
  category: string;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div>{ category }</div>
  );
}

export default CategoryCard;
