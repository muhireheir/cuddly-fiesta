import React, { useLayoutEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { getColor, tailwind } from '../../Config/tailwind'
import { useSelector, useDispatch } from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import { REMOVE_FROM_CART } from '../../store/action-types/cart'


const CartItems = ({ navigation }) => {
  const { cart } = useSelector(state => state);
  const [totPrice, setTotPrice] = useState(0);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    setTotPrice(cart.totPrice);
  }, [cart]);

  const removeFromcart = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item })
  }
  const gotoShippingInfo = () => {
    navigation.navigate('address');
  }
  return (
    <ScrollView >
      <View style={tailwind('w-full h-24  border-b-0 bg-gray-50 p-1  drop-shadow-md')}>
        <View style={tailwind('w-full flex-1 justify-between mt-1')}>
          <View style={tailwind('w-1/2')}>
            <Text style={tailwind('font-bold text-gray-500')}>Total: RWF {totPrice}</Text>
          </View>
          <TouchableOpacity onPress={gotoShippingInfo} style={tailwind('bg-secondary p-3')}>
            <Text style={tailwind('text-primary font-bold text-center')}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tailwind('w-full pt-3 mt-2 px-1')}>
        {cart.cartItems.map((item, key) => (
          <View key={key} style={tailwind('w-full flex-row flex-1 h-24 bg-gray-50 mt-1')}>
            <View style={tailwind('h-full w-28')}>
              <Image style={tailwind('h-full w-full')} source={{
                uri: item.img1
              }} />
            </View>
            <View style={tailwind('h-full w-56 pl-1 text-lg')}>
              <Text style={tailwind('text-primary font-bold')}>{item.p_title}</Text>
              <Text style={tailwind('text-gray-700')}>{item.qty} X {item.price}</Text>
              <Text style={tailwind('text-gray-700')}>Size:{item.size}</Text>
              <View style={tailwind('w-11 h-11 absolute right-0 mt-11 flex flex-row  justify-center items-center')}>
                <TouchableOpacity onPress={() => removeFromcart(item)}>
                  <Feather name='trash' color={getColor('red-700')} size={27} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default CartItems

