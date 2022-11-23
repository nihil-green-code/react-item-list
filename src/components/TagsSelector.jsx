import React from 'react';
import { useRef } from 'react';

const TagsSelector = ({ items, selectedTags, setSelectedTags, filter, setFilter }) => {
  const tags = useRef([]);

  items.forEach((item) => {
    tags.current.push(...item.tags);
  });

  tags.current = [...new Set(tags.current)];

  const onClickSelected = (index) => {
    const tmpArray = [...tags.current];

    if (!(selectedTags.includes(tmpArray[index]))) {
      setSelectedTags((prev) => [...prev, tmpArray[index]]);
    }
  };

  const onClickReset = () => {
    setSelectedTags([]);
    setFilter([]);
  };

  return (
    <>
      <div className='option-tags'>
        <p>아래의 태그들 중에서 원하는 태그들을 클릭하세요.</p>
        <form>
          <div className="tags">
            {tags.current.map((item, index) => (
              <div
                key={item + index}
                onClick={() => onClickSelected(index)}
                className={`tag ${selectedTags.includes(item) ? 'selected' : ''}`}
              >
                {'#'}{item}
              </div>
            ))}
          </div>
          <button type='reset' onClick={onClickReset}>설정 취소</button>
        </form>
      </div>
    </>
  );
};

export default TagsSelector;
