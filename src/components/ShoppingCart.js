import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCart = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.item)
  const cartItems = useSelector(state => state.cart.item)

  return (
    <View>
      
      
    </View>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({})