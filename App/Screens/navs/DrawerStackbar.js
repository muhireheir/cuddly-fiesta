import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CustomNavbar from './CustomNavbar';
import { tailwind } from '../../Config/tailwind';
import axios from 'axios'
import Orders from '../orders';




const Stack = createStackNavigator();



const DrawerStackbar = () => {
  return (
    <Stack.Navigator screenOptions={{
      header: (props) => <CustomNavbar {...props} />,
    }}>
      <Stack.Screen name='orders' component={Orders} />
    </Stack.Navigator>
  )
}

export default DrawerStackbar
