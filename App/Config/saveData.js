import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveData = async (state, _saveToStore = null, dispatch = null) => {

  // alert(JSON.stringify(state.cart));
  if (state.auth.userInfo) {
    try {
      await AsyncStorage.setItem('appInfo', JSON.stringify(state));
      if (_saveToStore) {
        alert('saving....');
        _saveToStore(dispatch);
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default SaveData
