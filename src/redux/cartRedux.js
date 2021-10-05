/* selectors */
export const getAllCart = ({ cart }) => cart.products;
export const getComment = ({cart}) => cart.comment;
export const getCount = ({ cart }) =>
  Object.keys(cart.products).reduce((p, c) => p + cart.products[c], 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const ADD_COMMENT = createActionName('ADD_COMMENT');

const REMOVE_ONE_PRODUCT = createActionName('REMOVE_ONE_PRODUCT');

const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeOneProduct = payload => ({ payload, type: REMOVE_ONE_PRODUCT });
export const addComment = payload => ({ payload, type: ADD_COMMENT });


export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CART });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const quantity = statePart.products[action.payload] || 0;
      return {
        ...statePart,
        products: { ...statePart.products, [action.payload]: quantity + 1 },

      };
    }
    case ADD_COMMENT: {
      statePart.comment = action.payload;
      return {
        ...statePart,
        comment: {...statePart.comment},

      };
    }
    case REMOVE_ONE_PRODUCT: {
      let quantity = statePart.products[action.payload] || 0;
      if (!quantity || quantity<2) quantity = 1;
      return {
        ...statePart,
        products: { ...statePart.products, [action.payload]: quantity - 1 },

      };
    }
    case REMOVE_PRODUCT: {
      const { [action.payload]: deleted, ...newCartProducts } = statePart.products;
      return {
        ...statePart,
        products: { ...newCartProducts },
      };
    }
    case CLEAR_CART: {
      return {
        ...statePart,
        products: {},
      };
    }
    default:
      return statePart;
  }
}
