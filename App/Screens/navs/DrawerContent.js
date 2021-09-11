import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer, Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getColor, tailwind } from '../../Config/tailwind'
import { useSelector } from 'react-redux'
import AsyncStorage from "@react-native-async-storage/async-storage";


const DrawerContent = (props) => {
  const store = useSelector(state => state);
  const { names } = store.auth.userInfo;
  const logOut = async () => {
    await AsyncStorage.removeItem('appInfo');

  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={tailwind('w-full p-2 flex-1 flex-wrap flex-row justify-center')}>
          <Avatar.Icon size={57} icon='account' style={{ backgroundColor: getColor('primary') }} />
          <View style={tailwind('w-full flex-row justify-center')} >
            <Text>
              {names}
            </Text>
          </View>
        </View>
        <DrawerItem onPress={logOut} icon={({ color, size }) => (
          <Icon size={size} color={color} name='exit-to-app' />
        )} label='Log out' />


      </DrawerContentScrollView>
    </View >

  )
}

export default DrawerContent
