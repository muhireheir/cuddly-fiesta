import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { tailwind } from '../../../Config/tailwind'


const InputText = ({ label, Name, onInput, type = 'default', size = 1, ...props }) => {
  return (
    <View style={tailwind('w-full p-1')}>
      <Text style={tailwind('text-primary')}>{label}</Text>
      <TextInput keyboardType={type} numberOfLines={size} onChangeText={val => onInput(Name, val)}  {...props} style={tailwind('border border-2 border-gray-300 rounded  px-2 py-1 mt-1')} />
    </View>
  )
}

export default InputText
