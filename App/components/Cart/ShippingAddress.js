import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { tailwind } from '../../Config/tailwind'
import TextInput from '../../components/auth/common/TextInput'
import Button from '../auth/common/Button'
import { useToast } from "react-native-toast-notifications";
import { placeOrder } from '../../store/action-creators/cart'
import Spinner from 'react-native-loading-spinner-overlay'



const ShippingAddress = () => {
  const store = useSelector(state => state);
  const items = store.cart.cartItems;
  const token = store.auth.userInfo.token;
  const toast = useToast();
  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setState({
      name: store.auth.userInfo.names,
      phone: store.auth.userInfo.phone,
      adress: store.auth.userInfo.address,
    })
  }, [store.auth.userInfo]);
  useEffect(() => {
    if (items.length > 0) {
      items.map(({ p_id, qty, size, p_title }) => {
        setProducts([...products, { productId: p_id, qty, size }])
      })
    }

  }, [items])

  const onInput = (key, value) => {
    setState({ ...state, [key]: value });

  }
  const onSubmit = () => {
    setIsLoading(true);
    const payload = { products, userInfo: state };
    placeOrder(payload, token)(dispatch, toast, setIsLoading);

  }


  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{ color: '#800080', fontWeight: 'normal' }}
      />
      <TextInput defaultValue={state.name} label='Name' name='name' onInput={onInput} />
      <TextInput defaultValue={state.phone} type='numeric' label='Tel' name='phone' onInput={onInput} />
      <TextInput value={store.auth.userInfo.email} label='Email' name='email' />
      <TextInput defaultValue={state.adress} label='address' size={4} name='adress' onInput={onInput} />
      <Button label='Confirm and Pay' onSubmit={onSubmit} />
    </ScrollView>
  )
}

export default ShippingAddress
