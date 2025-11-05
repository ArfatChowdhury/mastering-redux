import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.items)
    
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

    console.log(cartItems, 'from cartscreen');

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.itemEmoji}>{item.image}</Text>
            
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                    <Icon name="remove" size={16} color="#fff" />
                </TouchableOpacity>
                
                <Text style={styles.quantityText}>{item.quantity || 1}</Text>
                
                <TouchableOpacity style={styles.quantityButton}>
                    <Icon name="add" size={16} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping Cart</Text>
            
            {cartItems.length === 0 ? (
                <View style={styles.emptyCart}>
                    <Icon name="shopping-cart" size={64} color="#ccc" />
                    <Text style={styles.emptyText}>Your cart is empty</Text>
                    <Text style={styles.emptySubText}>Add some items to get started</Text>
                </View>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={item => String(item.id)}
                        renderItem={renderCartItem}
                        showsVerticalScrollIndicator={false}
                    />
                    
                    <View style={styles.footer}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalText}>Total:</Text>
                            <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
                        </View>
                        
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#2c3e50',
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#7f8c8d',
        marginTop: 16,
    },
    emptySubText: {
        fontSize: 14,
        color: '#bdc3c7',
        marginTop: 8,
    },
    cartItem: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    itemEmoji: {
        fontSize: 32,
        marginRight: 12,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#3498db',
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        minWidth: 20,
        textAlign: 'center',
    },
    footer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ecf0f1',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    totalText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    checkoutButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
})