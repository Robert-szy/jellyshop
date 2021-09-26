/* selectors */
export const getAll = ({ products }) => products;
export const getProduct = ({ products }, id) => products.find(p => p.id === id);

export const getNew = ({ products }) =>
  products.filter(item => item.newProduct === true);


/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const REMOVE_ITEM = createActionName('REMOVE_ITEM');

/* action creators */
export const removeItem = payload => ({ payload, type: REMOVE_ITEM });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case REMOVE_ITEM: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.compare = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}
