import React, { useLayoutEffect, useState } from 'react'
import { ScrollView, Text, Dimensions, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { tailwind } from '../../Config/tailwind'
import { ADD_TO_CART } from '../../store/action-types/cart'
import SaveData from '../../Config/saveData'



const SingleProduct = (props) => {
  const stateObj = useSelector(state => state);
  const dispatch = useDispatch();
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
  const addTocart = (g) => {
    if (product.size) {
      dispatch({ type: ADD_TO_CART, payload: product });
      if (g) {
        return navigation.navigate('cart', {
          screen: 'cartItems'
        });
      }
      return ToastAndroid.show('Added to cart', ToastAndroid.SHORT)
    }
    ToastAndroid.show('Select product size', ToastAndroid.SHORT)

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
            <TouchableOpacity onPress={() => addTocart(false)} style={tailwind('w-1/2 bg-secondary h-11 flex-1 flex-row justify-center items-center')} >
              <Text style={tailwind('font-bold text-primary')}>ADD TO CART</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addTocart(true)} style={tailwind('w-1/2 bg-primary h-11 flex-1 flex-row justify-center items-center')} >
              <Text style={tailwind('font-bold text-white')}>BUY NOW</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </ScrollView>
  )

}
export default SingleProduct;