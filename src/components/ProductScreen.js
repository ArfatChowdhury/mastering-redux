import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '@expo/vector-icons/Ionicons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { addToCart } from '../store/Slices/cartSlice'
import { useNavigation } from '@react-navigation/native'

const ProductScreen = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.items)
  const cartItems = useSelector(state => state.cart.items)
  const navigation = useNavigation()
  // console.log(cartItems, 'tho9 is cart');


  const handleAddToCart = (product) => {
    dispatch(addToCart({ productId: product.id, product:product }))
    console.log('Add to cart:', product.name)
  }

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Products</Text>

        <TouchableOpacity style={styles.cartIcon}
         onPress={() => navigation.navigate('Cart')}>
          <Ionicons name='cart' size={24} color="#2c3e50" />
          {cartItems?.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems?.length}</Text>
            </View>
          )}
        </TouchableOpacity>

      </View>

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        // numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Emoji Image */}
            <View style={styles.emojiContainer}>
              <Text style={styles.emoji}>{item.image}</Text>
            </View>

            {/* Product Info */}
            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.productPrice}>${item.price}</Text>

              <TouchableOpacity
                style={[
                  styles.addButton,
                  isInCart(item.id) && styles.addedButton
                ]}
                onPress={() => handleAddToCart(item)}
                disabled={isInCart(item.id)}
              >
                <Ionicons
                  name={isInCart(item.id) ? "checkmark" : "cart-outline"} // 🟢 Fix icon name
                  size={16}
                  color="white"
                  style={styles.buttonIcon}
                />
                <Text style={[
                  styles.buttonText,
                  isInCart(item.id) && styles.addedButtonText
                ]}>
                  {isInCart(item.id) ? 'Added' : 'Add to Cart'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    marginTop: '10%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  cartIcon: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 8,
    flex: 1,
    minWidth: Dimensions.get('window').width / 2 - 24,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    // flexDirection: 'row'
  },
  emojiContainer: {
    height: 120,
    // width: '100%',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
  },
  emoji: {
    fontSize: 48,
    textAlign: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 6,
    lineHeight: 18,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 12,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addedButton: {
    backgroundColor: '#27ae60',
  },
  buttonIcon: {
    marginRight: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  addedButtonText: {
    color: 'white',
  },
})