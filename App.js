// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import ProductScreen from './src/components/ProductScreen';
import CartScreen from './src/components/CartScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Products"
          screenOptions={{
            headerShown: false // We'll use custom headers
          }}
        >
          <Stack.Screen name="Products" component={ProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}