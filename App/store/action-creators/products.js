import axios from 'axios';
import { GET_ALL_PRODUCTS, GETTING_ALL_PRODUCTS } from '../action-types/products';


const getAllProducts = () => (dispatch) => {
  const API_URL = `${process.env.API_URL}/products`;

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