import {
  ADD_TO_CART,
  GET_CARD_LIST,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  UPDATE_QUANTITY_ERROR,
  UNAUTH_UPDATE_QUANTITY,
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
  cardList: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0,
  products: [],
};

const otherReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    const { product, qty, warehouseId } = action;
    let newCard;
    let existingCardData = state.cardList.find((item) => product.id === item.productId);
    const cardData = {
      id: 0,
      productId: product.id,
      amount: qty,
      'tbl_product.title': product.title,
      'tbl_brand.name': product['tbl_brand.name'],
      'tbl_product.subTitle': product.subTitle,
      'tbl_product.sellPrice': product.sellPrice,
      'tbl_product.listPrice': product.listPrice,
      warehouseId,
      'tbl_warehouse.name': product.warehouses.find((el) => el.warehouseId === warehouseId)['tbl_warehouse.name'],
      imageUrl: product.imageUrls?.[0]?.url,
    };

    if (existingCardData) {
      existingCardData.amount += qty;
      newCard = {
        cardList: [...state.cardList],
        total: state.total + product.sellPrice * qty,
      };
    } else {
      newCard = {
        cardList: [...state.cardList, cardData],
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
    return {
      ...state,
      cardList: action.payload?.cardList || [],
      total: action.payload?.total || 0,
    };
  }

  if (action.type === GET_CARD_LIST) {
    const cardList = action.payload || [];
    return {
      ...state,
      cardList,
      total: cardList.reduce((p, c) => (p += c['tbl_product.sellPrice'] * c.amount), 0),
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
    let itemToRemove = state.cardList.find((item) => action.product.productId === item.productId);
    let new_items = state.cardList.filter((item) => action.product.productId !== item.productId);

    //calculating the total
    let newTotal = state.total - itemToRemove['tbl_product.sellPrice'] * itemToRemove.amount;

    const newCard = {
      total: newTotal,
      cardList: new_items || [],
    };

    localStorage.setItem('localCard', JSON.stringify(newCard));
    return {
      ...state,
      ...newCard,
    };
  }

  if (action.type === REMOVE_ITEM_FROM_COMPARE) {
    let new_items = state.addedItemsToCompare.filter((item) => action.id !== item.id);

    return {
      ...state,
      addedItemsToCompare: new_items,
    };
  }

  if (action.type === UNAUTH_UPDATE_QUANTITY) {
    const { product, type } = action.response;

    let newTotal = state.total + product['tbl_product.sellPrice'];
    const cardList = state.cardList
      .map((item) => {
        if (item.productId === product.productId) return { ...item, amount: type === 'dec' ? item.amount - 1 : item.amount + 1 };
        return item;
      })
      .filter((el) => el.amount > 0);

    const newCard = {
      total: newTotal,
      cardList,
    };

    localStorage.setItem('localCard', JSON.stringify(newCard));

    return {
      ...state,
      ...newCard,
    };
  }
  // UPDATE_QUANTITY,
  // UPDATE_QUANTITY_ERROR,
  if (action.type === UPDATE_QUANTITY) {
    const { cardList } = action.response;
    console.log('action.response', action.response);
    const newTotal = cardList.reduce((total, item) => (total += item.amount * item['tbl_product.sellPrice']), 0);

    return {
      ...state,
      total: newTotal,
      cardList,
    };
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
      cardList: [],
      total: 0,
      shipping: 0,
    };
  } else {
    return state;
  }
};

export default otherReducer;
