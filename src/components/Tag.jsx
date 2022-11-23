import React from 'react';

const Tag = ({ tag, selected, setTags, onClickSelected }) => {
  return (
    <>
      <div
        className='tag'
        onClick={() => onClickSelected()}
      >
        #{tag}
      </div>
    </>
  );
};

export default Tag;
