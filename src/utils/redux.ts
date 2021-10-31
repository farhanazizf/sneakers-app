// import { Reducer } from "react";
import { createStore, Reducer } from "redux";
import { IData, initState } from "../pages/Homepage/types";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// interface IAction {
//   value: number;
//   type: "LOADING_ON" | "LOADING_OFF";
// }

const rootReducer: Reducer<IData> = (state = initState, action) => {
  switch (action.type) {
    case "ALL_PRODUCT":
      return {
        ...state,
        shoes: action.value,
      };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selected: action.value,
      };
    case "INSERT_CART":
      return {
        ...state,
        cart: {
          items: state.cart
            ? [...state.cart.items, action.value]
            : [action.value],
        },
      };
    case "PAYMENT_CART":
      return {
        ...state,
        cart: {
          items: [],
        },
      };
    case "DELETE_ITEM":
      let filterDelete = state.cart?.items.filter(
        (val) =>
          action.value.name !== val.name &&
          action.value.sizes !== val.sizes &&
          action.value.colors !== val.colors
      );
      return {
        ...state,
        cart: {
          items: filterDelete || [],
        },
      };
    default:
      return state;
  }
  // return state;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeRedux = createStore(persistedReducer);
export const persistor = persistStore(storeRedux);

// export const storeRedux = createStore(rootReducer);
