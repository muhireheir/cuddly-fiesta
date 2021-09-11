import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { tailwind } from '../../../Config/tailwind'

const Button = ({ label, onSubmit }) => {
  return (
    <View style={tailwind('w-full mt-1 px-1')}>
      <TouchableOpacity onPress={onSubmit} style={tailwind('w-full rounded bg-primary text-white p-2')} >
        <Text style={tailwind('text-center text-white font-bold')}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button
