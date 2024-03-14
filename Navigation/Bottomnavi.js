import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/Home';
import Favotite from '../src/Favotite';
import Setting from '../src/Setting';
import {BlurView} from '@react-native-community/blur';
const Tab = createBottomTabNavigator();
const Bottomnavication = () => {
 const navigation=useNavigation();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: st.tabBarStyle,
            tabBarBackground: () => {
              <BlurView
                overlayColor=""
                blurAmount={15}
                style={st.BlurViewStyle}
              />;
            },
          }}>
          <Tab.Screen
            name="Home"
     
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? 'yellow' : 'white',
                  }}
                  source={require('../src/img/home.png')}></Image>
              ),
            }}>
            {props => <Home {...props} navigation={navigation} />}
          </Tab.Screen>

          <Tab.Screen
            name="Favorites"
       
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? 'yellow' : 'white',
                  }}
                  source={require('../src/img/heat.png')}></Image>
              ),
            }}>
            {props => <Favotite {...props} navigation={navigation} />}
          </Tab.Screen>

          <Tab.Screen
            name="Setting"
          
            options={{
              tabBarLabel: 'Setting',
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? 'yellow' : 'white',
                  }}
                  source={require('../src/img/set.png')}></Image>
              ),
            }}>
            {props => <Setting {...props} navigation={navigation} />}
          </Tab.Screen>
         
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
const st = StyleSheet.create({
  tabBarStyle: {
    height: 40,
    position: 'absolute',
    backgroundColor: '#AEAEAE',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Bottomnavication;

/**
 *
 */
