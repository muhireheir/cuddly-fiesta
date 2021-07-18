import axios from 'axios';
import { GET_ALL_PRODUCTS, GETTING_ALL_PRODUCTS } from '../action-types/products';
const API_URL = 'https://sibling-api.herokuapp.com/api/products'

const getAllProducts = () => (dispatch) => {
  dispatch({
    type: GETTING_ALL_PRODUCTS,
    payload: { loading: true }
  })
  axios.get(API_URL)
    .then(response => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: { data: response.data.data, loading: false }
      })
    })
    .catch(error => {
      console.log(error);
    });

}
export { getAllProducts }