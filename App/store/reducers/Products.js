import { GET_ALL_PRODUCTS, GETTING_ALL_PRODUCTS } from "../action-types/products"

const Products = (state = { loading: true }, { payload, type }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return payload
    case GETTING_ALL_PRODUCTS:
      return payload
    default:
      return state
  }
}
export default Products