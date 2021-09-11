import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import CartItems from '../components/Cart/CartItems';
import Shipping from '../components/Cart/ShippingAddress'

const Stack = createStackNavigator();

const CartTabStack = () => {
  return (
    <Stack.Navigator initialRouteName='cartItems'>
      <Stack.Screen title='cart Items' name='cartItems' component={CartItems} />
      <Stack.Screen title='shipping address' name='address' component={Shipping} />
    </Stack.Navigator>
  )
}

export default CartTabStack;