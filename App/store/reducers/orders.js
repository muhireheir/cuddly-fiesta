import { GET_ALL_ORDERS } from "../action-types/orders"



const orders = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_ORDERS:
      return payload
    default:
      return state;
  }

}

export default orders;