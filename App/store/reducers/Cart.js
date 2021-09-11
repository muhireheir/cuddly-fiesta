import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart"
import { APP_LOADED } from '../action-types/common'
const cart = (state = { cartItems: [], totPrice: 0 }, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.concat(payload),
        totPrice: state.totPrice + (payload.price * payload.qty)
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.p_id !== payload.p_id),
        totPrice: state.totPrice - (payload.price * payload.qty)
      }
    case APP_LOADED:
      return payload.cart;
  }

  return state
}


export default cart;