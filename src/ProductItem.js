import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {FONT_SIZE} from '../Control/fullsize';
import {COLOR} from '../Control/Color';
import {useNavigation} from '@react-navigation/native';
const ProductItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', {item});
      }}>
      <View
        style={{
          width: 155,
          height: '98%',
          backgroundColor: '#DDDDDD',
          borderRadius: 15,
          padding: 15,
          marginRight: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={{
              position: 'relative',
              width: 125,
              height: 110,
              borderRadius: 20,
              borderWidth: 1,
            }}></Image>
          <View
            style={{
              width: 60,
              height: 27,
              padding: 4,
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(	72, 209, 204, 0.5)',
              position: 'absolute',
              top: -3,
              right: 0,
            }}>
            <Text style={{fontSize: 12}}>⭐</Text>
            <Text style={{fontSize: 12, color: 'black', fontWeight: 600}}>
              {item.star}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '60%',
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: 14, fontWeight: 700, color: 'black'}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 400, color: 'black'}}>
            {item.spice}
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 600}}>
              <Text style={{color: COLOR.ColorMain}}>$</Text>
              <Text style={{color: '#262B33'}}>-</Text>
              {item.price}
            </Text>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25}}
                source={require('../src/img/heart.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductItem;
