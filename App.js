import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/components/TodoApp';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import ProductScreen from './src/components/ProductScreen';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        
        {/* <TodoApp /> */}
        <ProductScreen/>
        
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: '10%',
    paddingHorizontal: '4%'
  },
});
