import axios from 'axios'

export const placeOrder = (payload, token) => (dispatch, toast, setIsLoading) => {
  const API_URL = `${process.env.API_URL}/orders/create`;
  axios.post(API_URL, payload, {
    headers:
      { Authorization: token }
  }).then(() => {
    setIsLoading(false);

  }).catch((error) => {
    const resp = error.response.data.error || error;
    toast.show(resp, {
      type: "danger",
      position: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
    setIsLoading(false);

  })

}
