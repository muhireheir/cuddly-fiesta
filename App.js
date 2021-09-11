import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { getColor } from './App/Config/tailwind'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Feather from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeStack from './App/Screens/HomeStack'
import store from './App/store/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import CartTabStack from './App/Screens/CartTabStack';
import SignUp from './App/components/auth/SignUp';
import { ToastProvider } from 'react-native-toast-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage';
import VerifyAccount from './App/components/auth/VerifyAccount'
import { APP_LOADED } from './App/store/action-types/common';
import SaveData from './App/Config/saveData';
import ProfileScreen from './App/Screens/ProfileScreen';








const Tabs = createMaterialBottomTabNavigator();

const App = () => {
  const [authSTate, setAuthState] = useState({});
  const num = 1;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const getStoredInfo = async () => {
    const appInfo = await AsyncStorage.getItem('appInfo');
    if (appInfo) {
      const appInfoJSON = JSON.parse(appInfo);
      setAuthState(appInfoJSON);
      dispatch({ type: APP_LOADED, payload: appInfoJSON })
    }
    return null;
  }

  useEffect(() => {
    new Promise(async (resolve) => {
      // process.env.API_URL = 'http://10.0.2.2:4000/api';
      process.env.API_URL = 'https://sibling-api.herokuapp.com/api';
      await getStoredInfo();
      resolve(process.env);
    }).then(() => {
      SplashScreen.hide();
    });

  }, [num])
  useEffect(() => {
    SaveData(state)
  }, [state])


  return (
    <>
      <StatusBar statusBarStyle='light-content' backgroundColor={getColor('primary')} />
      {authSTate?.auth?.verified == true ? (
        <NavigationContainer>
          <Tabs.Navigator initialRouteName='Home' barStyle={{ backgroundColor: getColor('primary') }}>
            <Tabs.Screen name="Profile" title="Profile" component={ProfileScreen}
              options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                  <Feather name="user" color={color} size={26} />
                ),
              }}
            />
            <Tabs.Screen name="Home" title="Home" component={HomeStack}
              options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                  <AntIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tabs.Screen name="cart" title="cart" component={CartTabStack}
              options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="shopping-basket" color={color} size={23} />
                ),
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      ) :
        authSTate?.auth?.verified === false ? (<VerifyAccount getStoredInfo={getStoredInfo} />) : (<SignUp getStoredInfo={getStoredInfo} />)
      }

    </>
  );
}


const MainApp = () => {
  return (
    <ToastProvider placement='top'>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  )
}

export default MainApp;