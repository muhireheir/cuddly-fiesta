import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerStackbar from './navs/DrawerStackbar'
import DrawerContent from './navs/DrawerContent'




const Drawer = createDrawerNavigator();

const ProfileScreen = (props) => {
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeTintColor: 'red',
      itemStyle: { marginVertical: 30 },
    }} drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="ProfileScreen" component={DrawerStackbar} />
    </Drawer.Navigator>
  )
}

export default ProfileScreen
