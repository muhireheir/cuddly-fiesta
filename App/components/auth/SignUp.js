import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native'
import { tailwind } from '../../Config/tailwind'
import InputText from './common/TextInput'
import Button from './common/Button'
import { useDispatch, useSelector } from 'react-redux'
import { signUp as register, login as authenticate } from '../../store/action-creators/auth'
import { useToast } from "react-native-toast-notifications";
import Spinner from 'react-native-loading-spinner-overlay'
import saveData from '../../Config/saveData'


const SignUp = ({ getStoredInfo }) => {
  const { height, width } = Dimensions.get('window');
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState('login');
  const dispatch = useDispatch();
  const toast = useToast();
  const onInput = (key, value) => {
    setState({ ...state, [key]: value });
  }
  const onSubmit = () => {
    if (screen === 'singup') {
      register(toast, state, setIsLoading, getStoredInfo)(dispatch);
    }
    if (screen === 'login') {
      authenticate(toast, state, setIsLoading, getStoredInfo)(dispatch)
    }
  }
  const switchScreens = (newScreen) => {
    setState({});
    setScreen(newScreen);

  }
  const store = useSelector(s => s);
  useEffect(() => {
    saveData(store);
  }, [store])


  if (screen === 'signup') {
    return (
      <ScrollView style={tailwind('w-full h-full')}>
        <View style={{ height, width, flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
          <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={{ color: '#800080', fontWeight: 'normal' }}
          />
          <View >
            <Text style={tailwind('text-center font-bold text-primary text-lg')}>Sign Up</Text>
          </View>
          <View style={{ paddingBottom: 10, paddingLeft: 6, paddingRight: 6, width: '100%' }}>
            <InputText label='Name' Name='name' onInput={onInput} />
            <InputText label='Email' Name='email' onInput={onInput} />
            <InputText label='Tel' type='phone-pad' Name='phone' onInput={onInput} />
            <InputText label='Address' size={3} Name='address' onInput={onInput} />
            <InputText secureTextEntry label='Password' Name='password' onInput={onInput} />
            <InputText secureTextEntry label='Confirm Password' Name='confirmPassword' onInput={onInput} />
            <Button label='Sign Up' onSubmit={onSubmit} />
            <Pressable onPress={() => switchScreens('login')}>
              <Text style={tailwind('mt-1 pl-2 font-bold text-primary text-base')}>Click here to login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    )
  }
  if (screen === 'login') {


    return (
      <ScrollView style={tailwind('w-full h-full')}>
        <View style={{ height, flexDirection: 'row', alignItems: 'center' }}>
          <View style={tailwind('w-full')}>
            <Spinner
              visible={isLoading}
              textContent={'Loading...'}
              textStyle={{ color: '#800080', fontWeight: 'normal' }}
            />
            <View >
              <Text style={tailwind('text-center font-bold text-primary text-lg')}>Login</Text>
            </View>
            <View style={{ paddingBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <InputText label='Email' Name='email' onInput={onInput} />
              <InputText secureTextEntry label='Password' Name='password' onInput={onInput} />
              <Button label='Login' onSubmit={onSubmit} />
              <Pressable onPress={() => switchScreens('signup')}>
                <Text style={tailwind('mt-1 pl-2 font-bold text-primary text-base')}>Click here to Register</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    )

  }



}

export default SignUp;
