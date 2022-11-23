import React, { useState } from 'react';
import { useEffect } from 'react';
import Rating from './Rating';

const Item = ({ item, selectedTags, filter, setFilter }) => {
  const [all, setAll] = useState('all');

  useEffect(() => {
    if (filter.includes(item.id)) {
      return;
    }

    if (selectedTags.length === 0) {
      setAll('all');
    } else {
      setAll('');
    }

    item.tags.forEach((tag) => {
      selectedTags.forEach((selectedTag) => {
        if (tag === selectedTag) {
          setFilter((prev) => [...prev, item.id]);
        }
      });
    });
  }, [filter, setFilter, item, selectedTags]);

  return (
    <>
      {(all === 'all' || filter.includes(item.id)) && (
        <div className='item'>
          <div className="item-image">
            <a href={item.link}>
              <img src={item.image} alt={item.name} />
            </a>
          </div>
          <p className="item-name">
            <a href={item.link}>
              <strong>{item.name}</strong>
            </a>
          </p>
          <p className="item-price">{item.price.toLocaleString()}원</p>
          <p className="item-rating">
            <Rating rating={item.score} />
            <span className='rating-number'>({item.score})</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Item;
