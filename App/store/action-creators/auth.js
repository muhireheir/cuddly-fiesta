import axios from 'axios';
import { SIGNUP_SUCCESS, ACCOUNT_VERIFIED } from '../action-types/auth'
const signUp = (toast, data, setIsLoading, getStoredInfo) => (dispatch) => {
  const API_URL = `${process.env.API_URL}/users/register`
  setIsLoading(true);
  axios.post(API_URL, data)
    .then(response => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { userInfo: response.data.data, verified: false }
      })
      setIsLoading(false);
      getStoredInfo();
    })
    .catch(error => {
      setIsLoading(false);
      const resp = error.response.data.error || error;
      toast.show(resp, {
        type: "danger",
        position: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
      return false
    });

}
const verifyAccount = (toast, data, setIsLoading, setverified) => (dispatch) => {
  const API_URL = `${process.env.API_URL}/users/verify`
  setIsLoading(true);
  axios.post(API_URL, data)
    .then(() => {
      new Promise(async (resolve, reject) => {
        resolve(await dispatch({
          type: ACCOUNT_VERIFIED,
          payload: true
        }))
      }
      ).then(() => {
        setIsLoading(false);
        setverified();
      }).catch(() => { });
    })
    .catch(error => {
      setIsLoading(false);
      const resp = error.response.data.error || error;
      toast.show(resp, {
        type: "danger",
        position: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
    })
}
const login = (toast, data, setIsLoading, getStoredInfo) => (dispatch) => {
  const API_URL = `${process.env.API_URL}/users/login`
  setIsLoading(true);
  axios.post(API_URL, data)
    .then(response => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { userInfo: response.data.data, verified: true }
      })
      setIsLoading(false);
      getStoredInfo();
    })
    .catch(error => {
      setIsLoading(false);
      const resp = error.response.data.error || error;
      toast.show(resp, {
        type: "danger",
        position: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
      return false
    });

}

export { signUp, verifyAccount, login }