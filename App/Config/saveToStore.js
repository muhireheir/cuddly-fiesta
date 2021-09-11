import { APP_LOADED } from '../store/action-types/common'
import AsyncStorage from "@react-native-async-storage/async-storage";
const SaveToStore = async (dispatch) => {
  const appInfo = await AsyncStorage.getItem('appInfo');
  if (appInfo) {
    const appInfoJSON = JSON.parse(appInfo);
    dispatch({ type: APP_LOADED, payload: appInfoJSON })
  }
  return null;
}
export default SaveToStore;