const tagFilter = (itemTags, selectedTags) => {
  const boolArray = [];

  console.log('itemTags >> ', itemTags);
  console.log('selectedTags >> ', selectedTags);

  for (let i = 0; i < itemTags.length; i++) {
    for (let j = 0; j < selectedTags.length; j++) {
      console.log(itemTags[i].tags.includes(selectedTags[j]));
    }
  }
};

export default tagFilter;
