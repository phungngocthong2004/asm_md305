import {View, Text, Settings} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../src/Login';
import SinUp from '../src/SinUp';
import ManHinhChao from '../src/ManHinhChao';
import Home from '../src/Home';
import Bottomnavication from './Bottomnavi';

import ProductItem from '../src/ProductItem';
import ChiTietSanPham from '../src/ChiTietSanPham';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={ManHinhChao}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SinUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bottom" component={Bottomnavication} />
        <Stack.Screen name="ProductDetail" component={ChiTietSanPham} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
