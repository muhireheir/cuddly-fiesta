import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { tailwind } from '../../Config/tailwind'


const Loader = () => {
  const { width, height } = Dimensions.get('window');
  return (
    <View style={{ width, height, top: 0, backgroundColor: 'rgba(128,0,128,0.2)', zIndex: 900 }}>
      <View style={tailwind('w-full h-full bg-red-500')}>

      </View>
    </View>
  )
}

export default Loader
