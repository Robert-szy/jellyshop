/* selectors */
export const getScreenType = ({ screenType }) => screenType;

/* action name creator */
const reducerName = 'screenType';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_SCREEN_TYPE = createActionName('SET_SCREEN_TYPE');

/* action creators */
export const setScreenType = payload => ({ payload, type: SET_SCREEN_TYPE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_SCREEN_TYPE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
