import React from 'react';
import { useState } from 'react';

const AlignFilter = ({ items, setItems, align, setAlign }) => {
  const [buttons, setButtons] = useState([
    { value: 'popular', label: '인기순', click: false, },
    { value: 'rate', label: '평점순', click: false, },
    { value: 'high-price', label: '높은 가격순', click: false, },
    { value: 'low-price', label: '낮은 가격순', click: false, },
  ]);

  const onClickAlign = (index) => {
    const tmpArray = [...buttons];

    tmpArray.forEach((item) => item.click = false);
    tmpArray[index].click = !tmpArray[index].click;

    setButtons(tmpArray);
    setAlign(tmpArray[index].value);

    const tmpItems = [...items];

    if (tmpArray[index].value === 'popular') {
      tmpItems.sort((a, b) => b.review - a.review);
    } else if (tmpArray[index].value === 'rate') {
      tmpItems.sort((a, b) => b.score - a.score);
    } else if (tmpArray[index].value === 'low-price') {
      tmpItems.sort((a, b) => a.price - b.price);
    } else {
      tmpItems.sort((a, b) => b.price - a.price);
    }

    setItems(tmpItems);
  };

  console.log(align);

  return (
    <>
      <div className="align-filter">
        {buttons.map((item, index) => (
          <div
            key={item.value}
            className={`align-button ${item.click ? 'selected' : ''}`}
            data-align-value={item.value}
            onClick={() => onClickAlign(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default AlignFilter;
