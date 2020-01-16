export const addItem = (state, item) => {
  const updatedBasket = [...state.basket];
  const index = updatedBasket.findIndex(bask => bask._id === item._id);

  if (index === -1) {
    updatedBasket.push({ ...item, count: 1 });
  } else {
    updatedBasket[index].count++;
  }
  return { ...state, basket: updatedBasket };
};

export const removeItem = (state, id) => {
  const updatedBasket = [...state.basket];
  const index = updatedBasket.findIndex(bask => bask._id === id);
  console.log(index);

  if (index >= 0) {
    const searchedItem = updatedBasket[index];
    if (searchedItem.count > 1) {
      searchedItem.count--;
    } else {
      updatedBasket.splice(index, 1);
    }
    return { ...state, basket: updatedBasket };
  }
};
