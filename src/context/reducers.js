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

  if (index >= 0) {
    const searchedItem = updatedBasket[index];
    if (searchedItem.count > 1) {
      searchedItem.count--;
    } else {
      updatedBasket.splice(index, 1);
    }
    return { ...state, basket: updatedBasket };
  } else return state;
};

export const addCode = (state, code) => {
  const updatedCodes = [...state.codes];
  let updatedMsg = "";

  if (!updatedCodes.length) {
    updatedCodes.push(code);
  } else {
    const alreadyIncludes = state.codes.some(cod => cod._id === code._id);
    if (alreadyIncludes) {
      updatedMsg = "Code is already active.";
    } else {
      const checkConjuctionCodes = updatedCodes.some(
        updatedCode => updatedCode.conjuction === false
      );
      if (code.conjuction && !checkConjuctionCodes) {
        updatedCodes.push(code);
      } else {
        updatedMsg = "You can't combine these codes.";
      }
    }
  }
  return { ...state, codes: updatedCodes, message: updatedMsg };
};

export const removeCode = (state, id) => {
  const updatedCodes = [...state.codes];
  const codes = updatedCodes.filter(code => code._id !== id);
  return { ...state, codes };
};

export const setMessage = (state, message) => {
  return { ...state, message };
};

export const setQuantity = (state, quantity) => {
  return { ...state, quantity };
};

export const setPrice = state => {
  const { basket, quantity, codes } = state;
  let priceArr = basket.map(basketItem => {
    const index = quantity.findIndex(
      quantityItem => quantityItem.name === basketItem.name
    );
    if (index >= 0) {
      const quantityItem = quantity[index];
      const quotient = basketItem.count / quantityItem.quantity;

      const remainder = basketItem.count % quantityItem.quantity;
      return (
        remainder * basketItem.price + Math.floor(quotient) * quantityItem.price
      );
    } else {
      return basketItem.price * basketItem.count;
    }
  });
  let sum = priceArr.reduce((a, b) => a + b, 0);
  if (codes.length > 0 && basket.length > 0) {
    codes.map(code => {
      const includesPercentage = code.name.includes("%");
      if (includesPercentage) {
        sum = ((100 - code.savings) / 100) * sum;
      } else {
        sum = sum - code.savings;
      }
    });
  }
  return { ...state, price: sum.toFixed(2) };
};

export const resetState = () => {
  return { basket: [], codes: [], message: "", quantity: [], price: 0 };
};
