import React, { useLayoutEffect, useState } from 'react'
import { ScrollView, Text, Dimensions, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { tailwind, getColor } from '../../Config/tailwind'

const SingleProduct = (props) => {
  const { navigation, route } = props
  const { params } = route
  const { p_title, price, img1, colors, sizes } = params
  const { width } = Dimensions
  const [product, setProduct] = useState(params);

  const setState = (prop, val) => {
    setProduct({ ...product, [prop]: val })
  }
  const increment = (nbr) => {
    if (nbr > 1) {
      setState('qty', nbr - 1)
    }
  }
  const decrement = (nbr) => {
    setState('qty', nbr + 1)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: p_title
    })
    setProduct({ ...product, qty: 1 })
  }, [props])

  return (
    <ScrollView>
      <View style={{ height: 200, width: width, backgroundColor: 'red' }}>
        <Image style={tailwind('w-full h-full')} source={{
          uri: img1
        }} />

      </View>
      <View style={tailwind('w-full p-1')}>
        <Text style={tailwind('text-primary font-bold text-lg pl-1')}>{p_title}</Text>
        <View style={tailwind('flex flex-1 flex-row pl-1')}>
          <Text>Condition: </Text>
          <Text style={tailwind('text-primary')}>Brand new</Text>
        </View>
        <View style={tailwind('flex flex-1 pl-1 flex-row')}>
          <Text>Price: </Text>
          <Text style={tailwind('text-gray-800 font-bold')}>Rwf {price}</Text>
        </View>
        <View style={tailwind('w-full relative')}>
          <Text style={tailwind('text-gray-800 font-bold mt-1 pl-1')}>Size: </Text>
          <View style={tailwind('flex flex-1 flex-row w-full flex-wrap')}>
            {sizes.map(({ size }, index) => (
              <TouchableOpacity style={tailwind(`p-2 ml-1 mt-1  ${product.size && product.size === size ? 'bg-primary' : 'bg-gray-300'}`)} onPress={() => setState('size', size)} key={index} >
                <Text style={tailwind(`font-bold ${product.size && product.size === size ? 'text-white' : 'text-gray-500'}`)}>{size}</Text>
              </TouchableOpacity>))}
          </View>
        </View>
        <View style={tailwind('w-full mt-1 ml-1')}>
          <Text style={tailwind('text-gray-800 font-bold')}>Quantity</Text>
          <View style={tailwind('w-full flex flex-row flex-1 mt-2')}>
            <TouchableOpacity onPress={() => increment(product.qty)} style={tailwind(`px-3 py-2 bg-gray-300`)}>
              <Text style={tailwind('text-gray-800 font-bold')}>-</Text>
            </TouchableOpacity>
            <View style={tailwind(`px-3 py-2`)}>
              <Text style={tailwind('text-gray-800 font-bold')}>{product.qty}</Text>
            </View>
            <TouchableOpacity onPress={() => decrement(product.qty)} style={tailwind(`px-3 py-2 bg-gray-300`)}>
              <Text style={tailwind('text-gray-800 font-bold')}>+</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={tailwind('w-full relative')}>
          <Text></Text>
        </View>
        <View style={tailwind('w-full relative')}>
          <View style={tailwind('w-full p-1 flex-1 flex-row')}>
            <TouchableOpacity style={tailwind('w-1/2 bg-secondary h-11 flex-1 flex-row justify-center items-center')} >
              <Text style={tailwind('font-bold text-primary')}>ADD TO CART</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('w-1/2 bg-primary h-11 flex-1 flex-row justify-center items-center')} >
              <Text style={tailwind('font-bold text-white')}>BUY NOW</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </ScrollView>
  )

}
export default SingleProduct;