import axios from 'axios'
import { GET_ALL_ORDERS } from '../action-types/orders';


export const getUnPaidOrders = (token) => (dispatch) => {
  const API_URL = `${process.env.API_URL}/orders/unpayed/`;
  axios.get(API_URL, { headers: { Authorization: token } }).then((response) => {
    const { data } = response.data
    dispatch({ type: GET_ALL_ORDERS, payload: data });
  })

}
