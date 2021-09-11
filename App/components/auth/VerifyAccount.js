import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, } from 'react-native'
import { tailwind } from '../../Config/tailwind'
import InputText from './common/TextInput'
import Button from './common/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from "react-native-toast-notifications";
import Spinner from 'react-native-loading-spinner-overlay'
import saveData from '../../Config/saveData'
import { verifyAccount } from '../../store/action-creators/auth'



const SignUp = ({ getStoredInfo }) => {
  const store = useSelector(s => s);
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const onInput = (key, value) => {
    setState({ ...state, [key]: value, userId: store.auth.userInfo.userId });
  }

  const Ver = () => {
    new Promise(async (resolve, reject) => {
      const dataToSave = { ...store, auth: { ...store.auth, verified: true } }
      resolve(await saveData(dataToSave));
    }).then(async () => {
      await getStoredInfo();
    }).catch((err) => {
      alert(err);
    });
  }

  const onSubmit = () => {
    verifyAccount(toast, state, setIsLoading, Ver)(dispatch);
  }
  return (
    <ScrollView style={tailwind('w-full h-full')}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{ color: '#800080', fontWeight: 'normal' }}
      />

      <View style={{ flexGrow: 1, marginTop: 20 }}>
        <Text style={tailwind('text-center font-bold text-primary text-lg')}>Account verification</Text>
      </View>
      <View style={{ flexGrow: 5, paddingBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
        <InputText label='verification code' Name='code' onInput={onInput} />
        <Button label='verify' onSubmit={onSubmit} />
      </View>
    </ScrollView>
  )
}

export default SignUp;
