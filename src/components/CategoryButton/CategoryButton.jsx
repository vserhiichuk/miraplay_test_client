import React from 'react';
import cn from 'classnames'
import './CategoryButton.scss'

const CategoryButton = ({ cat, isActive, onClick }) => (
  <button
    className={cn('games__category', {
      "active": isActive,
    })}
    onClick={onClick}
  >
    {cat}
  </button>
);

export default CategoryButton;
