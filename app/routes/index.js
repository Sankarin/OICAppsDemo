import React from 'react';

import 'react-native-gesture-handler';

import {  
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from '../pages/products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import ProductDetails from '../pages/ProductDetails';
import themes from '../styles/theme.style';


import Logo from '../components/Logo.component';
import Cart from '../components/Cart.component';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Products">
      <Stack.Screen name="Products" component={Products}  options={({ navigation, route }) => ({
  headerLeft: () => <Logo  navigation={navigation}   />, title:'Products',headerRight:()=><Cart navigation={navigation}/>
})}  />
      <Stack.Screen name="Checkout" component={Checkout}  options={({ navigation, route }) => ({
  headerLeft: () => <Logo  navigation={navigation}   />, title:'Checkout',headerRight:()=><Cart navigation={navigation}/>
})} />
      <Stack.Screen name="Receipt" component={Receipt}  options={({ navigation, route }) => ({
  headerLeft: () => <Logo  navigation={navigation}   />, title:'Receipt',headerRight:()=><Cart navigation={navigation}/>
})} />
<Stack.Screen name="ProductDetails" component={ProductDetails}  options={({ navigation, route }) => ({
  headerLeft: () => <Logo  navigation={navigation}   />, title:'ProductDetails',headerRight:()=><Cart navigation={navigation}/>
})} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
