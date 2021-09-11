import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { tailwind } from '../Config/tailwind'
import { useSelector, useDispatch } from 'react-redux'
import { getUnPaidOrders } from '../store/action-creators/orders'
import Spinner from 'react-native-loading-spinner-overlay';



const Orders = (props) => {
  const store = useSelector(state => state);
  const { token } = store.auth.userInfo;
  const { orders } = store;
  const [allOrders, setAllOrders] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getUnPaidOrders(token)(dispatch);
  }, [props]);

  useEffect(() => {
    setAllOrders(orders);
    console.log(orders);
  }, [orders]);

  if (!allOrders) {
    return (<Spinner
      visible={true}
      textContent={'Loading...'}
      textStyle={{ color: '#800080', fontWeight: 'normal' }}
    />)
  }

  return (
    <>
      <View style={tailwind('p-1')}>
        <ScrollView style={tailwind('w-full')}>
          <View style={tailwind('p-1')}>
            <Text>Unpaid Orders</Text>
          </View>
          {/*  */}

          {allOrders?.map(({ order_id, tot }, index) => (
            <View key={index} style={tailwind('p-1 bg-secondary flex flex-1 flex-row justify-between mt-1')}>
              <View style={tailwind('h-14  w-1/2')}>
                <Text style={tailwind('p-1 text-primary')}>Order Id: #{order_id}</Text>
                <Text style={tailwind('p-1 text-primary')} >Tot: {tot}RWF</Text>
              </View>
              <View style={tailwind('h-14 w-28 flex flex-row items-center')}>
                <TouchableOpacity style={tailwind('p-1 bg-primary rounded-sm')}>
                  <Text style={tailwind('p-1 text-gray-100 text-center')}>Pay Now </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

    </>
  )
}

export default Orders
