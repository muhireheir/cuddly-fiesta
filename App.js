import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { getColor } from './App/Config/tailwind'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Feather from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeStack from './App/Screens/HomeStack'
import store from './App/store/store';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'







const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <Provider store={store}>
      <StatusBar statusBarStyle='light-content' backgroundColor={getColor('primary')} />
      <NavigationContainer>
        <Tabs.Navigator initialRouteName='Home' barStyle={{ backgroundColor: getColor('primary') }}>
          <Tabs.Screen name="Profile" title="Profile" component={HomeStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Feather name="user" color={color} size={26} />
              ),
            }}
          />
          <Tabs.Screen name="Home" title="Home" component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <AntIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tabs.Screen name="cart" title="cart" component={HomeStack}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="shopping-basket" color={color} size={23} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}