import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  ADD_QUANTITY_WITH_NUMBER,
  RESET_CART,
  ADD_TO_COMPARE,
  REMOVE_ITEM_FROM_COMPARE,
  CREATE_DEFAULT_CART,
} from 'store/actions/action-types/action-names';

import {
  productsCollectionShoes,
  productsCollectionPillows,
  productsCollectionWomanDress,
  productsCollectionLinens,
  productsCollectionBathrobe,
  productsCollectionTen,
  productsCollectionEleven,
  productsCovid19,
  productsGrocery,
  productsElectronics,
  productsFurniture,
} from 'store/json-data/products';

const initialState = {
  productsCollectionShoes: productsCollectionShoes,
  productsCollectionPillows: productsCollectionPillows,
  productsCollectionWomanDress: productsCollectionWomanDress,
  productsCollectionLinens: productsCollectionLinens,
  productsCollectionBathrobe: productsCollectionBathrobe,
  productsCollectionTen: productsCollectionTen,
  productsCollectionEleven: productsCollectionEleven,
  productsCovid19: productsCovid19,
  productsGrocery: productsGrocery,
  productsElectronics: productsElectronics,
  productsFurniture: productsFurniture,
  cardItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0,
  products: [],
};

const otherReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    const { product, qty } = action;
    let existingCardData = state.cardItems.find((item) => product.id === item.product.id);
    let newCard;
    console.log('state.total', state.total);
    console.log('product.sellPrice * qty', product.sellPrice * qty);
    if (existingCardData) {
      existingCardData.qty += qty;
      newCard = {
        cardItems: [...state.cardItems],
        total: state.total + product.sellPrice * qty,
      };
    } else {
      newCard = {
        cardItems: [...state.cardItems, { product, qty }],
        total: state.total + product.sellPrice * qty,
      };
    }
    localStorage.setItem('localCard', JSON.stringify(newCard));

    return {
      ...state,
      ...newCard,
    };
  }

  if (action.type === CREATE_DEFAULT_CART) {
    console.log('action.payload', action.payload);
    return {
      ...state,
      cardItems: action.payload?.cardItems || [],
      total: action.payload?.total || 0,
    };
  }

  if (action.type === ADD_TO_COMPARE) {
    let addedItemToCompare =
      state.productsCollectionShoes.find((item) => item.id === action.id) ||
      state.productsCollectionPillows.find((item) => item.id === action.id) ||
      state.productsCollectionWomanDress.find((item) => item.id === action.id) ||
      state.productsCollectionLinens.find((item) => item.id === action.id) ||
      state.productsCollectionBathrobe.find((item) => item.id === action.id) ||
      state.productsCollectionTen.find((item) => item.id === action.id) ||
      state.productsCollectionEleven.find((item) => item.id === action.id) ||
      state.productsCovid19.find((item) => item.id === action.id) ||
      state.productsGrocery.find((item) => item.id === action.id) ||
      state.productsElectronics.find((item) => item.id === action.id) ||
      state.productsFurniture.find((item) => item.id === action.id);

    addedItemToCompare.quantity = 1;

    return {
      ...state,
      addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare],
    };
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.cardItems.find((item) => action.product.id === item.product.id);
    let new_items = state.cardItems.filter((item) => action.product.id !== item.product.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.product.sellPrice * itemToRemove.qty;

    return {
      ...state,
      cardItems: new_items || [],
      total: newTotal,
    };
  }

  if (action.type === REMOVE_ITEM_FROM_COMPARE) {
    let new_items = state.addedItemsToCompare.filter((item) => action.id !== item.id);

    return {
      ...state,
      addedItemsToCompare: new_items,
    };
  }

  if (action.type === ADD_QUANTITY) {
    const { product } = action;
    const cardItem = state.cardItems.find((item) => item.product.id !== product.id);
    cardItem.qty += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
      cardItems: [...state.cardItems],
    };
  }

  if (action.type === SUB_QUANTITY) {
    const { product } = action;
    const cardItem = state.cardItems.find((item) => item.product.id !== product.id);

    //if the qt == 0 then it should be removed
    if (cardItem.qty === 1) {
      let new_items = state.cardItems.filter((item) => item.product.id !== product.id);
      let newTotal = state.total - product.sellPrice;
      return {
        ...state,
        cardItems: new_items,
        total: newTotal,
      };
    } else {
      cardItem.qty -= 1;
      let newTotal = state.total - product.sellPrice;
      return {
        ...state,
        total: newTotal,
        cardItems: [...state.cardItems],
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      shipping: (state.shipping += 6),
    };
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      shipping: (state.shipping -= 6),
    };
  }

  if (action.type === RESET_CART) {
    localStorage.setItem('localCard', '');
    return {
      ...state,
      cardItems: [],
      total: 0,
      shipping: 0,
    };
  } else {
    return state;
  }
};

export default otherReducer;
