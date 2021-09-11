import { SIGNUP_SUCCESS, ACCOUNT_VERIFIED } from "../action-types/auth"
import { APP_LOADED } from '../action-types/common'


const auth = (state = {}, { payload, type }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
      return payload
    case APP_LOADED:
      return payload.auth
    case ACCOUNT_VERIFIED:
      const data = { ...state, verified: true };
      return data;
    default:
      return state
  }
}
export default auth