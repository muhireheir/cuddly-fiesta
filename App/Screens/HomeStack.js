import React, { useEffect, useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Carousel from '../components/carousel/Carousel'
import Categories from '../components/Categories/Categories'
import AllProducts from '../components/Products/AllProducts'
import { getAllProducts } from '../store/action-creators/products'
import { useDispatch, useSelector } from 'react-redux'
import SingleProduct from '../components/Products/SingleProduct'


const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  const state = useSelector(state => state);
  return (
    <ScrollView>
      <Carousel products={state.products} />
      <Categories />
      <AllProducts navigation={navigation} />
    </ScrollView>
  )
}

const HomeStack = ({ route }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state);
  useLayoutEffect(() => {
    if (state.products.loading) {
      getAllProducts()(dispatch);
    }

  }, [route])
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown

            : false
        }} name='allProductScreen' component={HomeScreen} />
        <Stack.Screen name='singleProduct' component={SingleProduct} />
      </Stack.Navigator>
    </>
  )
}

export default HomeStack
