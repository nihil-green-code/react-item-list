import Item from './Item';

const ItemList = ({ items, setItems, selectedTags, filter, setFilter }) => {
  return (
    <>
      <div className='item-list'>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            selectedTags={selectedTags}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
