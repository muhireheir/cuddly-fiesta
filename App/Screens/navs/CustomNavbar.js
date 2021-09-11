import React from 'react'
import { View, Text } from 'react-native'
import { Appbar, Button, IconButton } from 'react-native-paper'
import { getColor, tailwind } from '../../Config/tailwind'


const CustomNavbar = ({ navigation }) => {

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  }
  return (
    <View style={tailwind('w-full h-11 bg-primary')}>
      <IconButton
        icon="menu"
        size={26}
        color={getColor('white')}
        onPress={toggleDrawer}
      />
    </View>
  )
}

export default CustomNavbar
