import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';
import { tailwind } from '../../Config/tailwind';
import Kids from './kids.jpg'
import mens from './mens.jpg'
import women from './women.jpg'


const Categories = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert()}>
        <Avatar.Image size={60} source={mens} />
        <Text style={tailwind('text-center')}>Men</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Avatar.Image size={60} source={Kids} />
        <Text style={tailwind('text-center')}>Kids</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Avatar.Image size={60} source={women} />
        <Text style={tailwind('text-center')}>Women</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 5
  },
  btn: {
    width: 50,
    backgroundColor: 'green'
  }
});


export default Categories
