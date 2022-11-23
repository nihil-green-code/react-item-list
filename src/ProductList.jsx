import React from 'react';
import { useState } from 'react';
import AlignFilter from './components/AlignFilter';
import ItemList from './components/ItemList';
import TagsSelector from './components/TagsSelector';
import itemsData from './data/itemsData';

const ProductList = () => {
  const [items, setItems] = useState(itemsData.filter((item) => item.category === 'product'));
  const [selectedTags, setSelectedTags] = useState([]);
  const [filter, setFilter] = useState([]);
  const [align, setAlign] = useState('');

  return (
    <>
      <h2>주문제작 케이크</h2>
      <TagsSelector
        items={items}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        filter={filter}
        setFilter={setFilter}
      />
      <AlignFilter
        items={items}
        setItems={setItems}
        align={align}
        setAlign={setAlign}
      />
      <ItemList
        items={items}
        setItems={setItems}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};

export default ProductList;
