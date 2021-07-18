import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { tailwind } from '../../Config/tailwind'
import Spinner from 'react-native-loading-spinner-overlay';
import { getColor } from 'tailwind-rn';

const AllProducts = ({ navigation }) => {
  const productsState = useSelector(state => state.products);
  const viewProduct = (product) => {
    navigation.navigate('singleProduct', product);
  }
  return (
    <View style={tailwind('w-full bg-gray-50 p-1 flex flex-1 flex-row justify-between flex-wrap')}>
      {!productsState.loading ? (
        <>
          {productsState.data.map(
            (product, index) => (
              <View key={index} style={tailwind('w-w_49 h-44 rounded rounded-md mt-1')} >
                <TouchableOpacity style={tailwind('h-full w-full')} onPress={() => viewProduct(product)}>
                  <View style={tailwind('h-full w-full rounded rounded-md')}>
                    <View style={tailwind('w-full h-32')}>
                      <Image style={tailwind('w-full h-full')} source={
                        {
                          uri: product.img1
                        }
                      } />
                    </View>
                    <View style={tailwind('w-full h-12  p-1')}>
                      <Text style={tailwind('text-primary font-medium')}>{product.p_title}</Text>
                      <Text style={tailwind('text-gray-800 font-bold')}>Rwf {product.price}</Text>


                    </View>

                  </View>
                </TouchableOpacity>
              </View>
            )
          )}

        </>

      ) : (<Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{ color: '#800080', fontWeight: 'normal' }}
      />)}


    </View>
  )
}

export default AllProducts
